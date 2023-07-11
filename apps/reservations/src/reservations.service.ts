import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';
import { PAYMENTS_SERVICE } from '@app/common/constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { UserDto } from '@app/common/dto/user.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRespository: ReservationsRepository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentService: ClientProxy,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
    { email, _id: userId }: UserDto,
  ) {
    return this.paymentService
      .send('create_charge', { ...createReservationDto.charge, email })
      .pipe(
        map((res) => {
          return this.reservationRespository.create({
            ...createReservationDto,
            invoiceId: res.id,
            timestamp: new Date(),
            userId,
          });
        }),
      );
  }

  async findAll() {
    return this.reservationRespository.find({});
  }

  async findOne(_id: string) {
    return this.reservationRespository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRespository.findOneAndUpdate(
      {
        _id,
      },
      { $set: updateReservationDto },
    );
  }

  async remove(_id: string) {
    return this.reservationRespository.findOneAndDelete({ _id });
  }
}

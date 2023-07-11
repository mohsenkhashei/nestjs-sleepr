import { CreateChargeDto } from '@app/common/dto/create-charge.dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
//fake part
import { paymentMethodsResponse } from './fakeData/stripe.paymentMethods.response';
import { paymentIntentResponse } from './fakeData/stripe.paymentIntents.response';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    { apiVersion: '2022-11-15' },
  );
  constructor(private readonly configService: ConfigService) {}

  async createCharge({ card, amount }: CreateChargeDto) {
    // real part
    // const paymentMethod = await this.stripe.paymentMethods.create({
    //   type: 'card',
    //   card,
    // });

    //fake part
    const paymentMethod = paymentIntentResponse;

    // real part
    // const paymentIntent = await this.stripe.paymentIntents.create({
    //   payment_method: paymentMethod.id,
    //   amount: amount * 100,
    //   confirm: true,
    //   payment_method_types: ['card'],
    //   currency: 'usd',
    // });

    //fake part
    const paymentIntent = paymentMethodsResponse;

    return paymentIntent;
  }
}

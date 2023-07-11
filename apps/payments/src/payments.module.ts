import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { LoggerModule } from '@app/common/logger/logger.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NOTIFICATIONS_SERVICE } from '@app/common/constants/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`./apps/payments/.env`],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        NOTIFICATION_PORT: Joi.number().required(),
        NOTIFICATION_HOST: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        STRIPE_SECRET_KEY: Joi.string().required(),
      }),
    }),
    LoggerModule,
    ClientsModule.registerAsync([
      {
        name: NOTIFICATIONS_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('NOTIFICATION_HOST'),
            port: configService.get('NOTIFICATION_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}

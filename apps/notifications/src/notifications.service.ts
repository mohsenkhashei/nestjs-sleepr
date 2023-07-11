import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationsService {
  constructor(private readonly configeService: ConfigService) {}

  private readonly transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: this.configeService.get('SMTP_USER'),
      clientId: this.configeService.get('GOOGLE_OAUTH_CLIENT_ID'),
      clientSecret: this.configeService.get('GOOGLE_OAUTH_CLIENT_SECRET'),
      refreshToken: this.configeService.get('GOOGLE_OAUTH_REFRESH_TOKEN'),
    },
  });
  async notifyEmail({ email, text }: NotifyEmailDto) {
    await this.transporter.sendMail({
      from: this.configeService.get('SMTP_USER'),
      to: email,
      subject: 'Sleepr Notification',
      text,
    });
  }
}

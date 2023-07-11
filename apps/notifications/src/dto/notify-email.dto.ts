import { IsEmail, IsNotEmpty } from 'class-validator';

export class NotifyEmailDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  text: string;
}

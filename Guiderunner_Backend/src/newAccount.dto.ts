import {
  IsEmail,
  IsString,
  Max,
  MaxLength,
  maxLength,
  Min,
  MinLength,
} from 'class-validator';

export default class newAccountDto {
  @IsString({ message: 'A tartalomnak szövegnek kell lennie!' })
  @MinLength(3, { message: 'A szöveg nem lehetet kevesebb, mint 1 karakter!' })
  @MaxLength(20, { message: 'A szöveg nem lehetet nagyobb, mint 10 karakter!' })
  accountname: string;

  @MinLength(8, { message: 'A szöveg nem lehetet kevesebb, mint 1 karakter!' })
  @MaxLength(64, { message: 'A szöveg nem lehetet nagyobb, mint 10 karakter!' })
  password: string;

  @IsString({ message: 'A tartalomnak szövegnek kell lennie!' })
  @IsEmail()
  email: string;
}

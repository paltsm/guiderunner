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
  @IsString({ message: 'névvel valami rossz' })
  @MinLength(3, { message: 'A név nem lehetet kevesebb, mint 3 karakter!' })
  @MaxLength(20, { message: 'A név nem lehetet nagyobb, mint 20 karakter!' })
  accountname: string;

  @MinLength(8, { message: 'A jelszó nem lehetet kevesebb, mint 8 karakter!' })
  @MaxLength(64, { message: 'A jelszó nem lehetet nagyobb, mint 64 karakter!' })
  password: string;

  @IsString({ message: 'A tartalomnak szövegnek kell lennie!' })
  @IsEmail()
  email: string;
}

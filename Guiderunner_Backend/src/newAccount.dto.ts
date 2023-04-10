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
  @IsString({ message: 'A username nincs megadva vagy nem szöveg' })
  @MinLength(3, { message: 'A username nem lehetet kevesebb, mint 3 karakter!' })
  @MaxLength(20, { message: 'A username nem lehetet nagyobb, mint 20 karakter!' })
  username: string;

  @IsString({ message: 'A tartalomnak szövegnek kell lennie!' })
  @IsEmail()
  email: string;

  @MinLength(8, { message: 'A jelszó nem lehetet kevesebb, mint 8 karakter!' })
  @MaxLength(64, { message: 'A jelszó nem lehetet nagyobb, mint 64 karakter!' })
  password: string;

}

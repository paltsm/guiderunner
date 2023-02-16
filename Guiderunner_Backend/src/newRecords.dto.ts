import {
  IsEmail,
  IsEmpty,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  maxLength,
  Min,
  MinLength,
} from 'class-validator';

export default class newRecordsDto {
  @IsUrl()
  youtubelink: string;
}

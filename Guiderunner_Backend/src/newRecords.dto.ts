import {
  IsUrl
} from 'class-validator';

export default class newRecordsDto {
  @IsUrl()
  youtubelink: string;
}

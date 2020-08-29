import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly _id: string;

  @IsString()
  readonly username: string;

  @IsInt()
  readonly password: string;
}
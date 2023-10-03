import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  address: string;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;

  @IsOptional()
  delete_at?: Date;
}
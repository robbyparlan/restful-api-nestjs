import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn
} from 'typeorm';
import { IsNotEmpty, IsOptional } from 'class-validator';
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  username: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  fullname: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @IsOptional()
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  created_at?: Date;

  @IsOptional()
  @Column({ type: 'timestamp', nullable: true })
  updated_at?: Date;

  @IsOptional()
  @DeleteDateColumn({ type: 'timestamp' })
  delete_at?: Date;
}
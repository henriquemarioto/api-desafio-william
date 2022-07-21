import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("peoples")
class People {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 128 })
  full_name: string;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ length: 128 })
  surname: string;

  @Column({ length: 1 })
  gender: string;

  @Column({ unique: true, length: 11 })
  cellphone: string;

  @Column({ length: 255 })
  address: string;

  @Column({ type: 'character varying' || null, length: 255, nullable: true })
  comments: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default People;

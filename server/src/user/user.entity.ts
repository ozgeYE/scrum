import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    username: string;

    @CreateDateColumn()
    createdDate: Date;
}
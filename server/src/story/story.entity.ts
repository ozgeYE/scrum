import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('story')
export class StoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    storyName: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column({default: 0})
    status: boolean;

    @Column({default: 0})
    storyPoint: number;
}
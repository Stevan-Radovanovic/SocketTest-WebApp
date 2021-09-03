import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player {

    @PrimaryGeneratedColumn({type: 'integer'})
    id!: string;

    @Column({nullable: true, type: 'character varying'})
    firstName!: string;

    @Column({nullable: true, type: 'character varying'})
    lastName!: string;

}

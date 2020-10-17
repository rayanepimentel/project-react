import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('ongs')
export default class Ong {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: number;

    @Column()
    open_on_weekends: number
}
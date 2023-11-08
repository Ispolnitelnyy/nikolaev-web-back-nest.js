import { FileEntity } from "src/files/entities/file.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
// декоратор для соебинения с БД
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    // один юзер имеет много файлов
    @OneToMany(() => FileEntity, (file) => file.user)
    files: FileEntity[];
}

import {
    Column,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserEntity } from "../../users/entities/user.entity";

export enum FileType {
    PHOTOS = "photos",
    TRASH = "trash"
}
// декоратор для соебинения с БД
@Entity("files")
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    originalName: string;

    @Column()
    size: number;

    @Column()
    mimetype: string;
    // много файлов могут быть от одного юзера
    @ManyToOne(() => UserEntity, (user) => user.files)
    user: UserEntity;

    @DeleteDateColumn()
    deletedAt?: Date;
}

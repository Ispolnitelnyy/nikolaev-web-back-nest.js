import { UserEntity } from "src/users/entities/user.entity";
import {
    Column,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity("files")
// декоратор для соебинения с БД
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    originalname: string;

    @Column()
    size: string;

    @Column()
    mimetype: string;

    // много файлов могут быть от одного юзера
    @ManyToOne(() => UserEntity, (user) => user.files)
    user: UserEntity;

    @DeleteDateColumn()
    deletedAt: Date;
}

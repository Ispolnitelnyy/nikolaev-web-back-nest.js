import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { config } from "dotenv";
import { UsersModule } from "./users/users.module";
import { FilesModule } from "./files/files.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./users/entities/user.entity";
import { FileEntity } from "./files/entities/file.entity";
import { AuthModule } from './auth/auth.module';

config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [UserEntity, FileEntity],
            synchronize: true
        }),
        UsersModule,
        FilesModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}

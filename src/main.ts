import { config } from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as express from "express";
import { join } from "path";
config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });

    app.use("/uploads", express.static(join(__dirname, "..", "uploads")));

    const config = new DocumentBuilder()
        .setTitle("Nikolaev-web-back")
        .setDescription("The Nikolaev-web-back API description")
        .setVersion("1.0")
        .addTag("Nikolaev-web-back")
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("swagger", app, document, {
        swaggerOptions: {
            persistAuthorization: true
        }
    });

    await app.listen(process.env.SERVER_PORT);
}
bootstrap();

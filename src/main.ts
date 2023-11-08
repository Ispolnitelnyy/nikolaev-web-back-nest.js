import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { config } from "dotenv";
config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });

    const config = new DocumentBuilder()
        .setTitle("Nikolaev-web-back")
        .setDescription("The Nikolaev-web-back API description")
        .setVersion("1.0")
        .addTag("Nikolaev-web-back")
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("swagger", app, document);

    await app.listen(process.env.SERVER_PORT);
}
bootstrap();

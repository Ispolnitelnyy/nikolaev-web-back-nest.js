import {
    Controller,
    Get,
    Post,
    UseInterceptors,
    UploadedFile,
    ParseFilePipe,
    MaxFileSizeValidator,
    UseGuards,
    NotFoundException,
    Param
} from "@nestjs/common";
import { FilesService } from "./files.service";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileStorage } from "./storage";
// import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Controller("files")
@ApiTags("files") // для свагера
// @UseGuards(JwtAuthGuard) // доступ к контроллеру по jwt
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Get("/all")
    findAll() {
        return this.filesService.findAll();
    }
    @Get("/:id")
    async findById(@Param("id") id: number) {
        const file = await this.filesService.findById(id);
        if (!file) {
            throw new NotFoundException(`File with id ${id} not found`);
        }
        return file;
    }

    @Post()
    @UseInterceptors(
        FileInterceptor("file", {
            storage: fileStorage
        })
    )
    @ApiConsumes("multipart/form-data") // отвечает за тип запроса
    @ApiBody({
        // настраивает схему для свагера
        schema: {
            type: "object",
            properties: {
                file: {
                    type: "string",
                    format: "binary"
                }
            }
        }
    })
    create(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })
                ]
            })
        )
        file: Express.Multer.File
    ) {
        return file;
    }
}

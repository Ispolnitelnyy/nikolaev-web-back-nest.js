import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: "email@mail.com"
    })
    email: string;
    @ApiProperty({
        default: "Pavel Nikolaev"
    })
    name: string;
    @ApiProperty({
        default: "qwerty123"
    })
    password: string;
}

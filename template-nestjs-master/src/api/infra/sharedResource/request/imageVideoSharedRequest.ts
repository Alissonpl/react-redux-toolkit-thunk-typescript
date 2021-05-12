import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator'
export class ImageVideoSharedRequest {
    @ApiProperty({ example: 'lua', required: true, type: 'string', name: 'search', description: 'value of search' })
    @IsNotEmpty()
    @MaxLength(50, { message: 'max 50 caracter' })
    @MinLength(1, { message: 'min 1 caracter' })
    @IsString()
    search: string;

    constructor(search: string) {
        this.search = search;

    }
}
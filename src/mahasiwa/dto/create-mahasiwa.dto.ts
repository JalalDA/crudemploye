import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateMahasiwaDto {
    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsString()
    address : string

    @IsNumber()
    @IsNotEmpty()
    // @Length(4)
    startYear : number

    @IsNumber()
    @IsNotEmpty()
    // @Length(7)
    NIM : number
}

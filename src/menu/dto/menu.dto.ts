import { IsNotEmpty, IsString } from "class-validator";


export class MenuDto{

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsString()
    description : string;
}
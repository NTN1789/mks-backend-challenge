import { IsString   , IsEmail  , IsStrongPassword, IsOptional, IsDateString, IsEnum } from "class-validator"


export class CreateUserDto{
    @IsString()
    nome: string;

 
    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 6 ,   
        minNumbers:1, 
        minUppercase: 1 ,
        minLowercase: 0 , 
        minSymbols:1 
    })
    senha: string;

    // criando data 
    @IsOptional()
    @IsDateString()
    birthAt: string;

}
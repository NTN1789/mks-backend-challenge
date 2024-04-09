import { IsEmail, IsString,  IsStrongPassword } from "class-validator";

export class AuthLoginDto {

        @IsEmail()
        email:string;


        @IsString()
        @IsStrongPassword({
                minLength: 6 ,   
                minNumbers:1, 
                minUppercase: 1 , 
                minLowercase: 0 , 
                minSymbols:1  
            })
        senha:string;

}
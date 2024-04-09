import { Controller, Post, Body, Headers, UseGuards, Request, UseInterceptors, ParseFilePipe , FileTypeValidator, MaxFileSizeValidator} from "@nestjs/common";
/*import { AuthLoginDto } from "./dto/auth.login.dto";
import { AuthRegisterDto } from "./dto/auth.Register.dto";
import { AuthRecuperacaoDto } from "./dto/auth.Recuperacao.dto ";
import { AuthResetDto } from "./dto/auth.Reset.dto";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";
import { AuthMeDto } from "./dto/auth.Me.dto";
import { AuthGuard } from "./guards/auth.guard";
import { User } from "src/decorators/user-id.decorator";
import { FileInterceptor , FilesInterceptor,FileFieldsInterceptor} from "@nestjs/platform-express";


*/

@Controller('auth') // caminho /auth será autenticação 
export class authCotroller{

/*
        constructor(private readonly userService:UserService, 
                    private readonly authService:AuthService,
                    private readonly fileService:FileService
                        ) {} 


        // rota login

        @Post('login')
        async login(@Body() {email,senha}: AuthLoginDto){
            return await this.authService.login(email,senha);   

                }

        //cadastro
        @Post('register')
       
        async register(@Body() body: AuthRegisterDto){
           

            return this.authService.register(body);
        }


        @Post('recuperacao')   // recuperação de senha

        async recuperacao(@Body()  {email}: AuthRecuperacaoDto){
            return await this.authService.recuperacaoDeSenha(email);
        }

        @Post('reset') 
        async reset(@Body() {senha,token}:AuthResetDto){
            return await this.authService.reset(senha,token); 

        }


        @UseGuards(AuthGuard) // proteção de rotas para só os admin acessar 
        @Post('me') 

        async me(@User('email') user){
                              
           return {me: 'ok' , user};
            // agora além de verificar os dados do token , vai poder  verificar o user
        }
     




*/
        
    }
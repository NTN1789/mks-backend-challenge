import { Controller, Post, Body, Headers, UseGuards, Request, UseInterceptors, ParseFilePipe , FileTypeValidator, MaxFileSizeValidator} from "@nestjs/common";
import { UserService } from "src/usuario/usuario.service";
import { AuthService } from "./auth.service";
import { FilmesService } from "src/filmes/filmes.service";
import { AuthLoginDto } from "./dto/authLogin.dto";
import { AuthRegisterDto } from "./dto/authRegistro.dto";
import { AuthRecuperacaoDto } from "./dto/authRecuperacao.dto";
import { AuthResetDto } from "./dto/authReset.dto";
import { AuthGuard } from "./guards/auth.guard";
import { User } from "src/decorations/user-id.decorator";
import { FileInterceptor , FilesInterceptor,FileFieldsInterceptor} from "@nestjs/platform-express";



@Controller('auth') // caminho /auth será autenticação 
export class authCotroller{


        constructor(private readonly userService:UserService, 
                    private readonly authService:AuthService,
                    private readonly fileService:FilmesService
                        ) {} 


      

        @Post('login')
        async login(@Body() {email,senha}: AuthLoginDto){
            return await this.authService.login(email,senha);   

                }

        
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

        
    }
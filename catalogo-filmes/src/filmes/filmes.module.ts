import { MiddlewareConsumer, Module, NestModule, RequestMethod, forwardRef } from "@nestjs/common";
import { FilmesController } from "./filmes.controller";
import { FilmesService } from "./filmes.service";

import { AuthModule } from "src/auth/auth.Module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilmesEntity } from "./entity/filmes.entity";
import { UserModule } from "src/usuario/usuario.module";
// importando o userService no provider

// importando o PrismaModule para aplicação não dar erro 
@Module({
    imports:[
        forwardRef(()  => AuthModule),       // fazendo comunicação ao Auth
        forwardRef(() => UserModule),
        TypeOrmModule.forFeature([FilmesEntity])
    ],
  // importando o prismaModule para usar no service tem que fazer uma comunicação entre o prisma module
    controllers:[ FilmesController], // importando o controle da aplicação 
    providers:[FilmesService ] , // prover um serviço , através  
    exports:[FilmesService]
})  
export class FilmesModule  {}


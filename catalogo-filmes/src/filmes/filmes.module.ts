import { MiddlewareConsumer, Module, NestModule, RequestMethod, forwardRef } from "@nestjs/common";
import { FilmesController } from "./filmes.controller";
import { FilmesService } from "./filmes.service";

import { AuthModule } from "src/auth/auth.Module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilmesEntity } from "./entity/filmes.entity";
// importando o userService no provider

// importando o PrismaModule para aplicação não dar erro 
@Module({
    imports:[
        forwardRef(()  => AuthModule), // fazendo comunicação ao Auth
        TypeOrmModule.forFeature([FilmesEntity])
    ],
  // importando o prismaModule para usar no service tem que fazer uma comunicação entre o prisma module
    controllers:[ FilmesController], // importando o controle da aplicação 
    providers:[FilmesService ] , // prover um serviço , através  
    exports:[FilmesService]
})  
export class FilmesModule  implements  NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply().forRoutes(FilmesController, {
    
            path: 'users/:id',
            method: RequestMethod.ALL, // pegar todos os metódos 
            // o id do usarios
        })
      

    }
}


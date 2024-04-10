import { MiddlewareConsumer, Module, NestModule, RequestMethod, forwardRef } from "@nestjs/common";
import { UserController } from "./usuario.controller";
import { UserService } from "./usuario.service";

import { AuthModule } from "src/auth/auth.Module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";
import { FilmesModule } from "src/filmes/filmes.module";

@Module({
    imports:[
        forwardRef(()  => AuthModule), 
        forwardRef(()  => FilmesModule),
        
        TypeOrmModule.forFeature([UserEntity])
    ],
  
    controllers:[  UserController], 
    providers:[UserService  ] , 
    exports:[UserService]
})  
export class UserModule  implements  NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply().forRoutes(UserController, {
    
            path: 'users/:id',
            method: RequestMethod.ALL, 
          
        })
      

    }
}


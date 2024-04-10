import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { authCotroller } from "./auth.controller";

import { AuthService } from "./auth.service";


import { TypeOrmModule } from "@nestjs/typeorm";

import { FilmesModule } from "src/filmes/filmes.module";
import { UserEntity } from "src/usuario/entity/user.entity";
import { UserModule } from "src/usuario/usuario.module";


@Module({
    
     imports:[JwtModule.register({
            secret:String (process.env.JWT_SECRET)
     }),
     
     forwardRef(() => UserModule), 
     forwardRef(() => FilmesModule),
      
     TypeOrmModule.forFeature([UserEntity])
], 

     controllers:[authCotroller],
     providers:[AuthService],
     exports: [AuthService] 

})
export class AuthModule{}
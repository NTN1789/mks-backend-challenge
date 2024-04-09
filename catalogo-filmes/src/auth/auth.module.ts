import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { authCotroller } from "./auth.controller";

import { AuthService } from "./auth.service";


import { TypeOrmModule } from "@nestjs/typeorm";

import { FilmesModule } from "src/filmes/filmes.module";
import { FilmesEntity } from "src/filmes/entity/filmes.entity";

@Module({
    
     imports:[JwtModule.register({
            secret:String (process.env.JWT_SECRET)
     }),
     
     forwardRef(() => FilmesModule), 
   
      
     TypeOrmModule.forFeature([FilmesEntity])
], 

     controllers:[authCotroller],
     providers:[AuthService],
     exports: [AuthService] 

})
export class AuthModule{}
import { Injectable , UnauthorizedException, BadRequestException} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from "typeorm"

import { AuthRegisterDto } from "./dto/authRegistro.dto";
import { FilmesService } from "src/filmes/filmes.service";

import {FilmesEntity} from "src/filmes/entity/filmes.entity";


@Injectable()
export class AuthService{
  /*    private  issuer = 'login';
      private  audience = 'users';

    
    constructor (private readonly  jwtService:JwtService,
               
               
                 private readonly  userService: FilmesService ,
                  
                  @InjectRepository(UserEntity)
                  private readonly usersRepository:Repository<UserEntity>

                 ){} 
                 

       createToken(usuario:UserEntity){   
           
           console.log({secret:process.env.JWT_SECRET })
        
            return {
                accessToken:  this.jwtService.sign({
                 

                    id: usuario.id, 
                    nome: usuario.nome ,
                    email: usuario.email
                }, {
                      // tem outras informação para colocar 
                      expiresIn: "7 days",
                      subject:String(usuario.id),
                      issuer: this.issuer , 
                      audience:this.audience 
                    
              
                    })

            }

                    // vai usar o createToken quando logar
        }

        checkToken(token:string){
                
          try {
            const data =  this.jwtService.verify(token , {
              audience: this.audience,
              issuer: this.issuer

           });
 
              return data;           
          } catch (e) {
              throw new BadRequestException(e);
          }


        
     
     
     
        }


          // validação do token 

      isvalidtionToken(token:string){
            try {
                 this.checkToken(token)

              return true;
              
            } catch (e) {

                return false;
            }
          }


        async login(email:string, senha:string){
            // logando o user

       const user =  await this.usersRepository.findOneBy({   
                    
                    email,
                    senha                  
            });
 
            // se não tiver o usuario passado no email e senha 
                if (!user) {
                        throw new UnauthorizedException('Email e/ou senha incorretos')
                }
               
                console.log(user);
                  
                return  this.createToken(user);
        }

       
        async recuperacaoDeSenha(email:string){
           

            
      const user =  await this.usersRepository.findOneBy({
            

                
                email   
        });
        // se não tiver o usuario passado no email 
            if (!user) {
                    throw new UnauthorizedException('Email está incorreto ')
            }
       

            
          
          const token =  this.jwtService.sign({
             id: user.id,
             
          } ,{
      
              expiresIn: "7 days",
              subject:String(user.id),
              issuer: 'recuperacaoDeSenha' , 
              audience:'users' ,
          });

      
        
          
            return true


    }


        


         async reset(senha:string, token:string){
      try {
            const data: any =  this.jwtService.verify(token , {
              issuer: 'recuperacaoDeSenha' , 
              audience:'users' ,

          });

          if(isNaN(Number(data.id))){
            throw new BadRequestException('Token inválido')
          
          }
           
             await this.usersRepository.update(Number(data.id),{
                 senha
               
            }) ;

            const  user = await this.userService.show(Number(data.id));
        

            return await this.createToken(user);

            
          } catch (e) {
              throw new BadRequestException(e);
          }

     
        }   

        



         async register( dados:AuthRegisterDto){
          //pegando o dto para simplificar 
          const user = await this.userService.create(dados);
          console.log(user);
          return await this.createToken(user);
          

         }
*/

         }



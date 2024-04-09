import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateFilmesDto } from "./dto/create.filmes.dto";
import { UpdatePutFilmesDto } from "./dto/Update-put.filmes.dto" ;
import {UpdatePatchFilmesDto  } from "./dto/Update-Patch.filmes.dto"
import {Repository} from "typeorm"
import { FilmesEntity } from "./entity/filmes.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";

@Injectable()
export class  FilmesService{

    
        constructor(
                  @InjectRepository(FilmesEntity)
                private readonly filmesRepository:Repository<FilmesEntity>
                
                
                
                ){}

            

      async  create( {nome,descricao,genero,lancamento,popularidade,linguagensDisponivel}:CreateFilmesDto){
         
        // verificação se o email já está sendo usado 

        if (
                await this.filmesRepository.exists({
                        where: {
                            nome,
                            descricao,
                            genero,
                            lancamento,
                            popularidade,
                            linguagensDisponivel
                        }
                })
            
              )  {
                throw new BadRequestException('Este filme já tem no catálogo.');
               
        } 
              const  filmes = this.filmesRepository.create({ 
                        nome,
                        descricao,
                        genero,
                        lancamento,
                        popularidade,
                        linguagensDisponivel
                })
                
              return  this.filmesRepository.save(filmes);
              
             
        }
     
        
         async listUsuario(){
                  return await this.filmesRepository.find({

                  }); 
       
                }

        // chamar um usuario só pelo id e chave da tabela 

        async show(id:number){
                await this.exists(id);

        return await this.filmesRepository.findOneBy({     
                                id       
                     });     
                }

        async update(id:number , {nome,descricao,genero,popularidade,lancamento,linguagensDisponivel}:UpdatePutFilmesDto){
              // verificando se o usuario existe para não ocorrer error de criar dois usuario
            await this.exists(id);
              
                if(!descricao) {
                        descricao = null // se não tiver data e vazio ou nular
                }
              await  this.filmesRepository.update(id,{
                    
                                nome,
                               descricao : null, 
                                genero,
                                popularidade,
                                lancamento,
                                linguagensDisponivel       
              });
              return this.show(id);
        }
 
        async updateAndPatch(id:number , {nome,descricao,genero,popularidade,lancamento,linguagensDisponivel}:UpdatePatchFilmesDto){
        
             await this.exists(id);
                const data: any = {};

              
                

                if (descricao) {
                             data.email = descricao;   
                }


                
                if (nome) {
                        data.nome = nome;   
           }


           
           if (genero) {
                data.senha = genero;   
   }

   if (popularidade) {
        data.popularidade = popularidade;   
}

if (lancamento) {
    data.lancamento= lancamento;   
}


if (linguagensDisponivel) {
    data.linguagensDisponivel = linguagensDisponivel;   
}




            await  this.filmesRepository.update( id,{
                                  nome,
                                  descricao,
                                    genero,
                                  popularidade,
                                  lancamento,
                                  linguagensDisponivel   
                });
                return this.show(id);
        }
     async delete (id:number){
        await this.exists(id);
      
        

 await this.filmesRepository.delete(id);
     
        return true;

}     

     
     async exists(id: number) {


     

        if (!(await  this.filmesRepository.exists({
            where: {
                id,
            },
        }))) {
            throw new NotFoundException(`O usuário ${id} não existe.`);
        
          }
   
   
        }
     
  


}
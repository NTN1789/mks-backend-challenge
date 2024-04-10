import { Body, Delete, Get, Patch, Post, Put,Controller ,UseInterceptors,UseGuards} from "@nestjs/common";
//import { ParamId } from "../decorators/param-id.decorator";

import { UpdatePutFilmesDto } from "./dto/Update-put.filmes.dto";
import { UpdatePatchFilmesDto } from "./dto/Update-Patch.filmes.dto";

import { FilmesService } from "./filmes.service";
                      

                      /*src/enums/role.enum */
import { AuthGuard } from "../auth/guards/auth.guard";
                    


import { LogInterceptor } from "../interceptions/log.interceptor";
                               


//@UseGuards(AuthGuard,RoleGuard)  
//@UseInterceptors(LogInterceptor) 
@Controller('filmes')
export class FilmesController{

    constructor (private readonly filmesService:FilmesService){}

    @UseGuards(AuthGuard)
    @Get()
    async list(){
        return await this.filmesService.listUsuario();
    }

   
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() dados){

        return this.filmesService.create(dados);
    }

    

    @UseGuards(AuthGuard)
    @Get(':id')
    async readOne(  id:number ){
        console.log({id});
        return await this.filmesService.show(id);
    
}
@UseGuards(AuthGuard)
@Put(":id")
async update(@Body()  dados:UpdatePutFilmesDto, id:number){
    return await this.filmesService.update(id,dados);

}

@UseGuards(AuthGuard)
@Patch(":id")
async patch(@Body()  dados:UpdatePatchFilmesDto ,  id:number ){
    return  await this.filmesService.updateAndPatch(id,dados);
}

@UseGuards(AuthGuard)
@Delete(":id")
async delete( id:number){
        return await this.filmesService.delete(id) 
    }



}
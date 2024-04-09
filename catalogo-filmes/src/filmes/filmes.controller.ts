import { Body, Delete, Get, Patch, Post, Put,Controller ,UseInterceptors,UseGuards} from "@nestjs/common";
import { ParamId } from "../decorators/param-id.decorator";
                  
import { FilmesService } from "./filmes.service";
import { UpdatePutFilmesDto } from "./dto/Update-put.filmes.dto";
import { UpdatePatchFilmesDto } from "./dto/Update-Patch.filmes.dto";

                      

                      /*src/enums/role.enum */
import { AuthGuard } from "../auth/guards/auth.guard";
                    


import { LogInterceptor } from "../interceptions/log.interceptor";
                               


//@UseGuards(AuthGuard,RoleGuard)  
//@UseInterceptors(LogInterceptor) 
@Controller('users')
export class FilmesController{

    constructor (private readonly userService:FilmesService){}

    @Post()
    async create(@Body() dados){

        return this.userService.create(dados);
    }


    @Get()
    async list(){
            return await this.userService.listUsuario();
    }
    // caso queiram um usuario 
    

    @Get(':id')
    async readOne( @ParamId() id:number ){
        console.log({id});
        return await this.userService.show(id);
    
}

@Put(":id")
async update(@Body()  dados:UpdatePutFilmesDto,@ParamId() id:number){
    return await this.userService.update(id,dados);

}


@Patch(":id")
async patch(@Body()  dados:UpdatePatchFilmesDto , @ParamId() id:number ){
    return  await this.userService.updateAndPatch(id,dados);
}


@Delete(":id")
async delete(@ParamId() id:number){
        return await this.userService.delete(id) 
    }



}
import { Body, Delete, Get, Patch, Post, Put,Controller ,UseInterceptors,UseGuards} from "@nestjs/common";
//import { ParamId } from "../decorators/param-id.decorator";
                       
import { UserService } from "./usuario.service";
import { UpdatePutUserDto } from "./dto/upadate-Put.user.dto";
import { UpdatePatchUserDto } from "./dto/Update-Patch.user.dto";


import { AuthGuard } from "../auth/guards/auth.guard";
                    
//import { RoleGuard } from "../guardParaUser/role.guard";
                         

import { LogInterceptor } from "../interceptions/log.interceptor";
                               

//@UseGuards(AuthGuard,RoleGuard)  
@UseInterceptors(LogInterceptor) 
@Controller('users')
export class UserController{

    constructor (private readonly userService:UserService){}

    @Post()
    async create(@Body() dados){

        return this.userService.create(dados);
    }


    @Get()
    async list(){
            return await this.userService.listUsuario();
    }
    
    

    @Get(':id')
    async readOne( id:number ){
        console.log({id});
        return await this.userService.show(id);
    
}

@Put(":id")
async update(@Body()  dados:UpdatePutUserDto, id:number){
    return await this.userService.update(id,dados);

}


@Patch(":id")
async patch(@Body()  dados:UpdatePatchUserDto ,  id:number ){
    return  await this.userService.updateAndPatch(id,dados);
}


@Delete(":id")
async delete( id:number){
        return await this.userService.delete(id) 
    }










}
import { CreateFilmesDto } from "./create.filmes.dto";
import{PartialType} from '@nestjs/mapped-types';


export class UpdatePatchFilmesDto  extends  PartialType(CreateFilmesDto){

    

}
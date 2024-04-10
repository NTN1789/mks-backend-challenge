import { CreateUserDto } from "./Create.user.dto";
import{PartialType} from '@nestjs/mapped-types';


export class UpdatePatchUserDto  extends  PartialType(CreateUserDto){

    

}
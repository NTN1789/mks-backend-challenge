import { IsString , IsDateString, IsOptional} from "class-validator";



export class CreateFilmesDto{
    @IsString()
    nome: string;

 
    @IsString()
    descricao:string;

    @IsString()
    popularidade:string;

    @IsString()
    lancamento:string;

    @IsString()
    genero:string;

    @IsString()
    linguagensDisponivel:string;

    @IsOptional()
    @IsDateString()
    birthAt: string;



}
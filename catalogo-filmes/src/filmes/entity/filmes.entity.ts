import { Entity,PrimaryGeneratedColumn ,Column, CreateDateColumn,UpdateDateColumn} from "typeorm";
@Entity({
    name:'filmes'
   
})
export class FilmesEntity {

    @PrimaryGeneratedColumn({
        unsigned:true,

    })
    id?:number;

    @Column({
        length:63
    })
    nome:string;

    @Column({
        length:123,
        unique:true  
    })
    descricao:string;

    @Column()
    popularidade:string;

    @Column()
    lancamento:string;

    @Column()
    genero:string;

    @Column()
    linguagensDisponivel:string;

    @CreateDateColumn()
    createAt?:Date;

    @UpdateDateColumn()
    updateAt?:Date;

 

}
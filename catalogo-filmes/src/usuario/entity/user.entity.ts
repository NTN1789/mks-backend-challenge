
import { Entity,PrimaryGeneratedColumn ,Column, CreateDateColumn,UpdateDateColumn} from "typeorm";
@Entity({
    name:'usuarios'

})
export class UserEntity {

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
    email:string;

    @Column()
    senha:string;

    @Column({
        type:'date',
        nullable: true,
    })
    birthAt?:Date;

    @CreateDateColumn()
    createAt?:Date;

    @UpdateDateColumn()
    updateAt?:Date;

 
 
}
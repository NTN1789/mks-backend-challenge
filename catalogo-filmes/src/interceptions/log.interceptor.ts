import { NestInterceptor , ExecutionContext,CallHandler} from "@nestjs/common";
import {  Observable } from "rxjs";
import {  tap } from "rxjs/operators";
 



export class LogInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        
        const dt = Date.now();
        
        
      
            return next.handle().pipe(tap(() => {



                const req = context.switchToHttp().getRequest();
                console.log(`url: ${req.url}`)
                

               
                console.log(`URL: ${req.url}`);
                console.log(`METHOD: ${req.method}`);
                console.log(`Execução levou: ${Date.now() - dt} milisegundos.`);

            }))


    }

}
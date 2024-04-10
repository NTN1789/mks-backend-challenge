import { ExecutionContext, createParamDecorator, NotFoundException } from "@nestjs/common";

export const User = createParamDecorator( (filter:string, ctx:ExecutionContext)  => {
                                                                                  

    const request = ctx.switchToHttp().getRequest(); 
     
    

   if (request.user) {
      
      if (filter) {
         return request.user[filter];     
      }
      else {
         return request.user;       
      }
   }     
     else  {
         throw new NotFoundException('User not found');
      
      } 
   })

         

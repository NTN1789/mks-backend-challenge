import { NestMiddleware, BadRequestException} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class  UserIdCheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
     
        console.log('userIdcheckMiddlware', 'antes')

      if (isNaN(Number(req.params.id)) || Number (req.params.id) <= 0 ){  
            throw new BadRequestException('id inválido')

      } 
      console.log('userIdcheckMiddlware', 'depois')
      
      next();
    }

}
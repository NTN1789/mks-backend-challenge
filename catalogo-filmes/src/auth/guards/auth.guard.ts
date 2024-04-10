import {
    CanActivate,
    ExecutionContext,
    Inject,
    Injectable,
    forwardRef,
  } from '@nestjs/common';
  import { AuthService } from "../auth.service";
  import { CacheService } from 'src/cache/cache.service';
 import { FilmesService } from 'src/filmes/filmes.service';
import { UserService } from 'src/usuario/usuario.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    // o CanActivate e importante dms nos guards
  
    constructor(
     
      private readonly authService: AuthService, 
      private readonly userService: UserService,
    //  private redisCache: CacheService
 
    ) {}
  
    async canActivate(context: ExecutionContext) {
  
  
      const request = context.switchToHttp().getRequest();
  
      const { authorization } = request.headers;
     
  
      try {
        const data = this.authService.checkToken(
          (authorization ?? '').split(' ')[1],
        );
  
        request.tokenPayload = data;
  
        request.user = await this.userService.show(data.id);
  
        return true;
      } catch (error) {
        return false;
      }
  
    
    }
  }
  
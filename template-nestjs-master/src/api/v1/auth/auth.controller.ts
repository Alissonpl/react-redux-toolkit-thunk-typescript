import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 204,
    description: 'Return with success but without result',
  })
  @ApiResponse({
    status: 400,
    description: 'Return with error',
  })
  @ApiResponse({
    status: 500,
    description: 'Error intern',
  })
  async login(): Promise<string> {
    return await this.authService.login();
  }
}

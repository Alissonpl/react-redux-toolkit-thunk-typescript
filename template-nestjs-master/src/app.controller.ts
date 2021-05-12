import { Controller, Get } from '@nestjs/common';

class Health {
  msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }
}

@Controller('actuator')
export class AppController {
  @Get('health')
  getHello(): Health {
    return new Health('Dad is On');
  }
}

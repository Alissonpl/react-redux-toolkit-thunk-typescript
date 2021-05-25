import { Module, HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [],
  exports: [HttpModule],
})
export class ConnectorsModule { }

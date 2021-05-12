import { Module } from '@nestjs/common';
import { ConnectorsModule } from '../connectors/connectors.module';

@Module({
  imports: [ConnectorsModule],
  providers: [],
  exports: [],
})
export class AdapterModule {}

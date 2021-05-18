import { Module } from '@nestjs/common';
import { ConnectorsModule } from '../connectors/connectors.module';
import { ImageVideoAdapter } from './imageVideo/imageVideAdapter.provider'
@Module({
  imports: [ConnectorsModule,],
  providers: [ImageVideoAdapter],
  exports: [ImageVideoAdapter],
})
export class AdapterModule { }

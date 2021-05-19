import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ImageVideoModule } from './imageVideo/imageVideo.module'

@Module({
  imports: [ImageVideoModule, InfraModule],
})
export class V1Module { }

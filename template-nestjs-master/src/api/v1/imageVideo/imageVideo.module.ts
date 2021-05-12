import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ImageVideoController } from './imageVideo.controller';
import { ImageVideoService } from './imageVideo.service';

@Module({
  controllers: [ImageVideoController],
  providers: [ImageVideoService],
  imports: [InfraModule],
})
export class ImageVideoModule { }

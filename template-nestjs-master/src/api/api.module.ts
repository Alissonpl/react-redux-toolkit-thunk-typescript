import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { V1Module } from './v1/v1.module';
import { ImageVideoModule } from './v1/imageVideo/imageVideo.module'

const routes: Routes = [
  {
    path: '/v1',
    module: V1Module,
    children: [
      {
        path: '/image-video',
        module: ImageVideoModule
      }
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
})
export class ApiModule { }

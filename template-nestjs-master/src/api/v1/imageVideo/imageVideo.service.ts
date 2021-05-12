import { Injectable } from '@nestjs/common';
import { ImageVideoParamsRequest } from './infra/request/imageVideoParamsRequest'
@Injectable()
export class ImageVideoService {
  async getImageVideo(query: ImageVideoParamsRequest): Promise<string> {
    return 'OK';
  }
}

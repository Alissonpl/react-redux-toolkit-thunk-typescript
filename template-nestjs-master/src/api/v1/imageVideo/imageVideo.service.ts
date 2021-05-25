import { Injectable } from '@nestjs/common';
import { ImageVideoParamsRequest } from './infra/request/imageVideoParamsRequest'
import ImageVideoResource from './infra/response/imageVideoRequest'
import { ImageVideoAdapter } from '../../../infra/adapter/imageVideo/imageVideAdapter.provider'
import { ImageVideoReceiveContract } from '../../../infra/adapter/imageVideo/contracts/receive/imageVideoReceiveContract'
import { ImageVideoMapper } from './infra/mappers/imageVideoMappers'


@Injectable()
export class ImageVideoService {
  constructor(private imageVideoAdapter: ImageVideoAdapter) { }

  async getImageVideo(query: ImageVideoParamsRequest): Promise<ImageVideoResource> {

    const responseImageVideo: ImageVideoReceiveContract = await this.imageVideoAdapter.getImageVideo(query)

    return ImageVideoMapper.contractToResource(responseImageVideo);
  }
}

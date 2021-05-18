import { Controller, Get, Query, ValidationPipe, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ImageVideoService } from './imageVideo.service';
import { ImageVideoParamsRequest } from './infra/request/imageVideoParamsRequest'
import ImageVideoResource from './infra/response/imageVideoRequest'

@Controller()
export class ImageVideoController {
  constructor(private readonly imageVideoService: ImageVideoService) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Successs' })
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

  async imageVideo(

    @Query(ValidationPipe) search: ImageVideoParamsRequest,
    @Req() req,
    @Res() res,
  ): Promise<ImageVideoResource> {
    const response: ImageVideoResource = await this.imageVideoService.getImageVideo(search);
    console.log(response)
    return res.status(200).json(response)
  }
}

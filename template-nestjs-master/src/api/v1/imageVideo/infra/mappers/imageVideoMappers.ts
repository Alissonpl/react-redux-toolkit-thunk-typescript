import { ImageVideoReceiveContract } from '../../../../../infra/adapter/imageVideo/contracts/receive/imageVideoReceiveContract'


import ImageVideoResource from '../response/imageVideoRequest'


export class ImageVideoMapper {
    static contractToResource(
        imageVideoReceiveContract: ImageVideoReceiveContract,
    ): ImageVideoResource {
        return new ImageVideoResource(
            imageVideoReceiveContract.collection
        );
    }


}

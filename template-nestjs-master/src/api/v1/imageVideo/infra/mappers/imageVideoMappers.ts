import { ImageVideoReceiveContract } from '../../../../../infra/adapter/imageVideo/contracts/receive/imageVideoReceiveContract'


import ImageVideoResource from '../response/imageVideoRequest'


export default class ImageVideoMapper {
    static contractToResource(
        imageVideoReceiveContract: ImageVideoReceiveContract,
    ): ImageVideoResource {
        return new ImageVideoResource(
            imageVideoReceiveContract.collection
        );
    }


}

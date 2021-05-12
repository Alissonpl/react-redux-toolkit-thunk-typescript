import { ApiResponseProperty } from '@nestjs/swagger';

export class ImageVideoSharedResource {
    @ApiResponseProperty({ type: Object })
    collection: Object;

    constructor(collection: Object) {
        this.collection = collection;

    }
}
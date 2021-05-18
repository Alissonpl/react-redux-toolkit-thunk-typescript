import {
    HttpException,
    HttpService,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
// import { AxiosRequestConfig } from 'axios';
import { ImageVideoReceiveContract } from './contracts/receive/imageVideoReceiveContract';
import { ImageVideoSendContract } from './contracts/send/imageVideoSendContract'
@Injectable()
export class ImageVideoAdapter {
    private BASEPATH_NASA = process.env.BASEPATH_NASA;

    constructor(private readonly httpService: HttpService) { }

    async getImageVideo({ search }: ImageVideoSendContract): Promise<ImageVideoReceiveContract> {

        try {
            const url = `${this.BASEPATH_NASA}/search?q=${search}`;
            return this.httpService
                .get(url)
                .toPromise()
                .then((response) => response.data)
                .catch((error) => {
                    throw new HttpException(
                        error.response.data.message,
                        error.response.status,
                    );
                });
        } catch (error) {
            // if (error?.status === 403) throw new HttpException('Unauthorized', 403);
            throw new InternalServerErrorException();
        }
    }
}

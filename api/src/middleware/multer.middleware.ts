import {
    Middleware,
    NestMiddleware,
    ExpressMiddleware,
} from '@nestjs/common';

import * as multer from 'multer';
import * as aws from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const s3 = new aws.S3();

export interface MulterConfig {
    fieldName: string;
    maxCount: number;
}

@Middleware()
export class MulterMiddleware implements NestMiddleware {
    resolve(config: MulterConfig): ExpressMiddleware {
        return (req, res, next) => {
            const storage = multerS3({
                acl: 'public-read',
                s3,
                bucket: 'elasticbeanstalk-eu-central-1-163073226037',
                contentType: multerS3.AUTO_CONTENT_TYPE,
                metadata(req, file, cb) {
                    cb(null, {fieldName: file.fieldname});
                },
                key(req, file, cb) {
                    cb(null, Date().toString());
                },
            });

            multer({storage})
                .array(config.fieldName, config.maxCount)(req, res, next);
        };
    }
}
import {
    Middleware,
    NestMiddleware,
    ExpressMiddleware,
} from '@nestjs/common';

import * as multer from 'multer';
import * as aws from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const s3 = new aws.S3();

@Middleware()
export class MulterMiddleware implements NestMiddleware {
    resolve(fieldName: string, maxCount: number): ExpressMiddleware {
        return (req, res, next) => {
            const storage = multerS3({
                acl: 'public-read',
                s3,
                bucket: 'elasticbeanstalk-eu-central-1-163073226037',
                contentType: multerS3.AUTO_CONTENT_TYPE,
                // tslint:disable-next-line:no-shadowed-variable
                metadata(req, file, cb) {
                    cb(null, {fieldName: file.fieldname});
                },
                // tslint:disable-next-line:no-shadowed-variable
                key(req, file, cb) {
                    cb(null, Date.now().toString());
                },
            });

            multer({storage})
                .array(fieldName, maxCount)(req, res, next);
        };
    }
}
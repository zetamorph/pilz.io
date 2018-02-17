import {
    Middleware,
    NestMiddleware,
    ExpressMiddleware,
} from '@nestjs/common';

import * as multer from 'multer';
import * as path from 'path';

@Middleware()
export class MulterMiddleware implements NestMiddleware {
    resolve(fieldName: string, maxCount: number, folderName: string, prefix: string): ExpressMiddleware {
        return (req, res, next) => {
            const storage = multer.diskStorage({
                destination: `/srv/images/${folderName}`,
                // tslint:disable-next-line:no-shadowed-variable
                filename(req, file, cb) {
                    cb(null, `${prefix}-${Date.now()}${path.extname(file.originalname)}`);
                },
            });

            multer({storage})
                .array(fieldName, maxCount)(req, res, next);
        };
    }
}
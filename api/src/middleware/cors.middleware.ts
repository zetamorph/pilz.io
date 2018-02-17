import {
    Middleware,
    NestMiddleware,
    ExpressMiddleware,
} from '@nestjs/common';

@Middleware()
export class CorsMiddleWare implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With');
            next();
        };
    }
}
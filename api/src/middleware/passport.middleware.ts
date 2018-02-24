/* import {
    Middleware,
    NestMiddleware,
    ExpressMiddleware,
} from '@nestjs/common';

import { Passport } from 'passport';

import { UserService } from '../user/user.service';

@Middleware()
export class PassportLocalMiddleware implements NestMiddleware {
    constructor(
        private readonly userService: UserService,
    ) {
        const passport = new Passport();
    }

    resolve(): ExpressMiddleware {
        return (req, res, next) => {

        };
    }
} */
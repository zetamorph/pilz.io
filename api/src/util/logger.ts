import * as winston from 'winston';

export const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            timestamp() {
                return (Date.now().toString());
            },
        }),
    ],
});

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';

import * as dotenv from 'dotenv';

// load variables from ../.env
dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3001);
}
bootstrap();

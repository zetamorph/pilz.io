import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

import * as dotenv from 'dotenv';

// load the env variables
dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3001);
}
bootstrap();

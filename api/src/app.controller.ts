import { Body, Get, Controller, Post, Req, Request, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Hello World!';
  }

  @Post()
    create(@Req() req, @Body() body) {
      console.log(req);
      return [];
  }
}

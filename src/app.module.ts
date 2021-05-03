import { RenderModule } from 'nest-next';
import Next from 'next';

import { Module } from '@nestjs/common';

import { ApiController } from './api/api.controller';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

export const NextModule = RenderModule.forRootAsync(
  Next({
    quiet: true,
    dev: process.env.NODE_ENV !== 'production',
  })
);
@Module({
  imports: [NextModule, AuthModule],
  controllers: [AppController, ApiController],
  providers: [],
})
export class AppModule {}

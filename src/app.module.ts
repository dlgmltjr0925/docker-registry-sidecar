import { RenderModule } from 'nest-next';
import Next from 'next';

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { DockerRegistryService } from './docker-registry/docker-registry.service';
import { RegistryModule } from './registry/registry.module';
import { RegistryService } from './registry/registry.service';
import { UserModule } from './user/user.module';

export const NextModule = RenderModule.forRootAsync(
  Next({
    quiet: true,
    dev: process.env.NODE_ENV !== 'production',
  })
);
@Module({
  imports: [NextModule, AuthModule, RegistryModule, UserModule],
  controllers: [AppController],
  providers: [AuthService, DockerRegistryService, RegistryService],
})
export class AppModule {}

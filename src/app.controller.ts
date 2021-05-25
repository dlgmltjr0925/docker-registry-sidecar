import { Response } from 'express';

import { Controller, Get, Render, Res } from '@nestjs/common';

import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @Render('home')
  @Get()
  async home() {
    return {};
  }

  @Render('login')
  @Get('login')
  async login(@Res() res: Response) {
    if (!(await this.authService.hasSystemAdmin())) res.status(302).redirect('sign-up/admin');
    return {};
  }

  @Render('sign-up/admin')
  @Get('sign-up/admin')
  async signUpAdmin() {
    return {};
  }

  @Render('setting/account')
  @Get('setting/account')
  async account() {
    return {};
  }

  @Render('setting/registries')
  @Get('setting/registries')
  async registries() {
    return {};
  }

  @Render('setting/users')
  @Get('setting/users')
  async users() {
    return {};
  }
}

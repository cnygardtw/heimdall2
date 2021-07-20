import {
  Controller,
  Get,
  Post,
  Req,
  UseFilters,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {ApiParam, ApiBody, ApiOperation} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {Request} from 'express';
import {AuthenticationExceptionFilter} from '../filters/authentication-exception.filter';
import {LocalAuthGuard} from '../guards/local-auth.guard';
import {LoggingInterceptor} from '../interceptors/logging.interceptor';
import {User} from '../users/user.model';
import {AuthnService} from './authn.service';
import {LoginDto} from './dto/login.dto';

@UseInterceptors(LoggingInterceptor)
@Controller('authn')
export class AuthnController {
  constructor(private readonly authnService: AuthnService) {}

  @ApiOperation({summary: 'Login via user/password payload'})
  @ApiBody({
    type: LoginDto,
    description: 'user/password payload',
    required: true,
    isArray: false
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via LDAP user payload'})
  @ApiBody({
    type: LoginDto,
    description: 'user/password payload',
    required: true,
    isArray: false
  })
  @UseGuards(AuthGuard('ldap'))
  @Post('login/ldap')
  async loginToLDAP(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via Github user payload'})
  @ApiParam({ name: 'username', type: 'string' })
  @Get('github')
  @UseGuards(AuthGuard('github'))
  @UseFilters(new AuthenticationExceptionFilter())
  async loginToGithub(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via Github callback'})
  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  @UseFilters(new AuthenticationExceptionFilter())
  async getUserFromGithubLogin(@Req() req: Request): Promise<void> {
    const session = await this.authnService.login(req.user as User);
    await this.setSessionCookies(req, session);
  }

  @ApiOperation({summary: 'Login via Gitlab user payload'})
  @ApiParam({ name: 'username', type: 'string' })
  @Get('gitlab')
  @UseGuards(AuthGuard('gitlab'))
  @UseFilters(new AuthenticationExceptionFilter())
  async loginToGitlab(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via Gitlab callback'})
  @Get('gitlab/callback')
  @UseGuards(AuthGuard('gitlab'))
  @UseFilters(new AuthenticationExceptionFilter())
  async getUserFromGitlabLogin(@Req() req: Request): Promise<void> {
    const session = await this.authnService.login(req.user as User);
    await this.setSessionCookies(req, session);
  }

  @ApiOperation({summary: 'Login via Google user payload'})
  @ApiParam({ name: 'username', type: 'string' })
  @Get('google')
  @UseGuards(AuthGuard('google'))
  @UseFilters(new AuthenticationExceptionFilter())
  async loginToGoogle(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via Google callback'})
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @UseFilters(new AuthenticationExceptionFilter())
  async getUserFromGoogle(@Req() req: Request): Promise<void> {
    const session = await this.authnService.login(req.user as User);
    await this.setSessionCookies(req, session);
  }

  @ApiOperation({summary: 'Login via Okta user payload'})
  @ApiParam({ name: 'username', type: 'string' })
  @Get('okta')
  @UseGuards(AuthGuard('okta'))
  @UseFilters(new AuthenticationExceptionFilter())
  async loginToOkta(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via Okta callback'})
  @Get('okta/callback')
  @UseGuards(AuthGuard('okta'))
  @UseFilters(new AuthenticationExceptionFilter())
  async getUserFromOkta(@Req() req: Request): Promise<void> {
    const session = await this.authnService.login(req.user as User);
    await this.setSessionCookies(req, session);
  }

  @ApiOperation({summary: 'Login via OIDC user payload'})
  @ApiParam({ name: 'username', type: 'string' })
  @Get('oidc')
  @UseGuards(AuthGuard('oidc'))
  async loginToOIDC(
    @Req() req: Request
  ): Promise<{userID: string; accessToken: string}> {
    return this.authnService.login(req.user as User);
  }

  @ApiOperation({summary: 'Login via OIDC callback'})
  @Get('oidc/callback')
  @UseGuards(AuthGuard('oidc'))
  async getUserFromOIDC(@Req() req: Request): Promise<void> {
    const session = await this.authnService.login(req.user as User);
    await this.setSessionCookies(req, session);
  }

  async setSessionCookies(
    req: Request,
    session: {
      userID: string;
      accessToken: string;
    }
  ): Promise<void> {
    req.res?.cookie('userID', session.userID);
    req.res?.cookie('accessToken', session.accessToken);
    req.res?.redirect('/');
  }
}

import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { VideoofferPageComponent } from './videooffer-page/videooffer-page.component';
import { VideoPlayerComponent } from './shared/video-player/video-player.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { VerifyEmailPageComponent } from './verify-email-page/verify-email-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'verify-email', component: VerifyEmailPageComponent },
    { path: 'forgot-password', component: ForgotPasswordPageComponent },
    { path: 'reset', component: ResetPageComponent },
    { path: 'videos', component: VideoofferPageComponent },
    { path: 'video/:id', component: VideoPlayerComponent },
    { path: 'privacy-policy', component: PrivacyPageComponent },
    { path: 'imprint', component: ImprintPageComponent },
    { path: '**', redirectTo: '' }
];

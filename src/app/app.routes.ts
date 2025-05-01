import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { VideoofferPageComponent } from './videooffer-page/videooffer-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'forgot-password', component: ResetPageComponent },
    { path: 'video/:id', component: VideoofferPageComponent },
    { path: 'privacy-policy', component: PrivacyPageComponent },
    { path: 'imprint', component: ImprintPageComponent },
    { path: '**', redirectTo: '' }
];

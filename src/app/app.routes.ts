import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { VideoPlayerComponent } from './features/video-player/video-player.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './features/imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'video/:id', component: VideoPlayerComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: '**', redirectTo: '' }
];

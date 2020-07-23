import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const welcomeModuleRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
];

export const WelcomeModuleRouting = RouterModule.forChild(welcomeModuleRoutes);

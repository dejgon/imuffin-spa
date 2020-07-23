import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomeModuleRouting } from './welcome.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    WelcomeModuleRouting,
    SharedModule
  ]
})
export class WelcomeModule { }

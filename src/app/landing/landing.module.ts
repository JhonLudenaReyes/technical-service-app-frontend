import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, NavigationModule, ImageModule],
  exports: [LandingComponent],
})
export class LandingModule {}

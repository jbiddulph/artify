import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, AuthModule, AuthRoutingModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class UiModule {}

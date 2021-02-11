import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UiModule } from '@artify/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, RouterModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

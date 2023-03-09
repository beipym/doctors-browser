import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routes/app-routing.module';

import { AppComponent } from './app.component';
import { BottomBarLayoutModule } from './layout/bottom-bar-layout/bottom-bar-layout.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BottomBarLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

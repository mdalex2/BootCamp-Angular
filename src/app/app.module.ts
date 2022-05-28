import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutosModule } from './autos/autos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

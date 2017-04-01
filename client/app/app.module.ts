import 'jquery';
import 'widgster';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';

import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { PreviewService } from './_services/preview.service' 

import { HttpClient } from './_services/http.client';
import { AppConfig } from './app.config';
import { LoginComponent } from './login/login.component';
import { AuthModule  } from './auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    routing
    
  ],

  providers: [ AuthService,HttpClient,AuthGuard,AppConfig,PreviewService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

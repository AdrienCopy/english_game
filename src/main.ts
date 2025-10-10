import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FormsModule,
      RouterModule.forRoot(appRoutes)  // <- configuration du router
    )
  ]
}).catch(err => console.error(err));
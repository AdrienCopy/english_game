import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      GameComponent 
    ],

  })
  export class AppModule {}

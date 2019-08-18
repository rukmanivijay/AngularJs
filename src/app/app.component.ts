import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}

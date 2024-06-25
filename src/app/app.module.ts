import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHeaderComponent } from './default-layout/default-header/default-header.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultNavBarComponent } from './default-layout/default-nav-bar/default-nav-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        DefaultHeaderComponent,
        DefaultLayoutComponent,
        DefaultNavBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

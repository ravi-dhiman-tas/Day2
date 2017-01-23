//  core packages
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule, Routes }     from "@angular/router";

// components
import { AppComponent }     from './app/app.component';
import { PageNotFoundComponent }     from './app/PageNotFound.component';


export const appRoutes: Routes = [
    { path: '', component: PageNotFoundComponent },
    { path: 'any', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}
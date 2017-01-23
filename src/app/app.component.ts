// cores
import { Component } from "@angular/core";
import { NgModule } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h1>HTML from template.</h1>
        <a routerLink="/any" routerLinkActive="active">New page</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {}
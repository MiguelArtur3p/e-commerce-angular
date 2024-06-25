import { Component, input } from '@angular/core';

@Component({
    selector: 'default-nav-bar',
    templateUrl: './default-nav-bar.component.html',
    styleUrl: './default-nav-bar.component.css'
})
export class DefaultNavBarComponent
{
    navList = input.required<string[]>();

}

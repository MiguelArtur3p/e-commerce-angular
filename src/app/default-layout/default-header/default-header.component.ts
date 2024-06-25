import { Component } from '@angular/core';

@Component({
    selector: 'default-header',
    templateUrl: './default-header.component.html',
    styleUrl: './default-header.component.css'
})
export class DefaultHeaderComponent
{
    navList: string[] = ["Promoções", "Cupons", "Planos"];
}

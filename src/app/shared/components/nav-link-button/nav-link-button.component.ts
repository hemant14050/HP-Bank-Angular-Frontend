import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link-button',
  templateUrl: './nav-link-button.component.html',
  styleUrl: './nav-link-button.component.css'
})
export class NavLinkButtonComponent {
  @Input() routerLink:string = '';
  @Input() routerLinkActiveOptions:any = {};
  @Input() routerLinkActive:string = 'active-nav';
}

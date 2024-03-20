import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() extraClasses: string = '';
  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() btnType:string = 'button';
  @Input() disabled:boolean = false; 

  onClick() {
    this.btnClick.emit();
  }
}

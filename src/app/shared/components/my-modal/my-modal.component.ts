import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.css'
})
export class MyModalComponent {
  @Input() modalTitle!:string;
  @Input() modalMessage!:string;
  @ViewChild('demoModal') demoModal: any;
  modalRef: NgbModalRef | null = null;
  
  constructor(private modalService:NgbModal){}

  public openModal() {
    this.modalRef = this.modalService.open(this.demoModal, { centered: true });
  }
}

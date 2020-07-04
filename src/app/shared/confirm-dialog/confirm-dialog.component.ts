import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  static PRIMARY_LEVEL = 'btn-primary';
  static INFO_LEVEL = 'btn-info';
  static SUCCESS_LEVEL = 'btn-success';
  static WARNING_LEVEL = 'btn-outline-warning';
  static DANGER_LEVEL = 'btn-outline-danger';

  @Input() title;
  @Input() description;
  @Input() level;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

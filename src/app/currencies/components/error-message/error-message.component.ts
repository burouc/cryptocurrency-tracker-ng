import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() error: string;

  @Output() clearError = new EventEmitter();

  closeMessage() {
    this.clearError.emit();
  }
}

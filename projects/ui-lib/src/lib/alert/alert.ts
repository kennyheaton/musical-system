import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'success' | 'warning' | 'error' | 'info';

@Component({
  selector: 'ui-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrls: ['./alert.scss'],
})
export class AlertComponent {
  @Input() variant: AlertVariant = 'info';
  @Input() dismissible: boolean = false;
  @Input() title: string = '';

  @Output() dismissed = new EventEmitter<void>();

  isVisible: boolean = true;

  dismiss() {
    this.isVisible = false;
    this.dismissed.emit();
  }

  get alertClasses(): string {
    return ['ui-alert', `ui-alert--${this.variant}`, !this.isVisible ? 'ui-alert--hidden' : '']
      .filter(Boolean)
      .join(' ');
  }
}

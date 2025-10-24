import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ui-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.scss'],
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() color: string = 'primary';

  get spinnerClasses(): string {
    return ['ui-spinner', `ui-spinner--${this.size}`, `ui-spinner--${this.color}`]
      .filter(Boolean)
      .join(' ');
  }
}

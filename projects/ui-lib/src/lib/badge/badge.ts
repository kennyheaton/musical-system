import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss'],
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() dot: boolean = false;

  get badgeClasses(): string {
    return [
      'ui-badge',
      `ui-badge--${this.variant}`,
      `ui-badge--${this.size}`,
      this.dot ? 'ui-badge--dot' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}

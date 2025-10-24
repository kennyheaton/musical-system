import { Component, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'default' | 'outlined' | 'elevated';

@Component({
  selector: 'ui-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class CardComponent implements AfterContentInit {
  @Input() variant: CardVariant = 'default';
  @Input() hoverable: boolean = false;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  @ContentChild('[card-header]') headerContent?: ElementRef;
  @ContentChild('[card-footer]') footerContent?: ElementRef;

  hasHeader = false;
  hasFooter = false;

  ngAfterContentInit() {
    this.hasHeader = !!this.headerContent;
    this.hasFooter = !!this.footerContent;
  }

  get cardClasses(): string {
    return [
      'ui-card',
      `ui-card--${this.variant}`,
      `ui-card--padding-${this.padding}`,
      this.hoverable ? 'ui-card--hoverable' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}

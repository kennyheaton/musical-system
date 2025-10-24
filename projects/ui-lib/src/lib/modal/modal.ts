import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  selector: 'ui-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
})
export class ModalComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input() isOpen: boolean = false;
  @Input() size: ModalSize = 'md';
  @Input() closeOnBackdropClick: boolean = true;
  @Input() closeOnEscape: boolean = true;
  @Input() showCloseButton: boolean = true;

  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();

  @ContentChild('[modal-header]') headerContent?: ElementRef;
  @ContentChild('[modal-footer]') footerContent?: ElementRef;

  hasHeader = false;
  hasFooter = false;

  ngAfterContentInit() {
    this.hasHeader = !!this.headerContent;
    this.hasFooter = !!this.footerContent;
  }

  ngOnInit() {
    if (this.closeOnEscape) {
      document.addEventListener('keydown', this.handleEscape);
    }
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleEscape);
  }

  ngOnChanges() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
      this.opened.emit();
    } else {
      document.body.style.overflow = '';
    }
  }

  handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
    }
  };

  close() {
    this.isOpen = false;
    document.body.style.overflow = '';
    this.closed.emit();
  }

  handleBackdropClick() {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }

  handleContentClick(event: MouseEvent) {
    event.stopPropagation();
  }

  get modalClasses(): string {
    return ['ui-modal', this.isOpen ? 'ui-modal--open' : ''].filter(Boolean).join(' ');
  }

  get contentClasses(): string {
    return ['ui-modal__content', `ui-modal__content--${this.size}`].filter(Boolean).join(' ');
  }
}

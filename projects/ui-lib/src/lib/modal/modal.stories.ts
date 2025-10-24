import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal';
import { moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'modal-wrapper',
  template: `
    <div>
      <button
        (click)="isOpen = true"
        style="padding: 0.5rem 1rem; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Modal
      </button>

      <ui-modal
        [isOpen]="isOpen"
        [size]="size"
        [closeOnBackdropClick]="closeOnBackdropClick"
        [showCloseButton]="showCloseButton"
        (closed)="isOpen = false"
      >
        <div modal-header *ngIf="hasHeader">
          <h2 style="margin: 0;">Modal Title</h2>
        </div>

        <div style="padding: 1rem 0;">
          <p style="margin: 0 0 1rem 0;">This is a modal dialog. You can put any content here.</p>
          <p style="margin: 0;">Click outside, press Escape, or use the close button to dismiss.</p>
        </div>

        <div
          modal-footer
          *ngIf="hasFooter"
          style="display: flex; gap: 0.5rem; justify-content: flex-end;"
        >
          <button
            (click)="isOpen = false"
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Cancel
          </button>
          <button
            (click)="isOpen = false"
            style="padding: 0.5rem 1rem; border: none; background: #2196f3; color: white; border-radius: 4px; cursor: pointer;"
          >
            Confirm
          </button>
        </div>
      </ui-modal>
    </div>
  `,
  imports: [ModalComponent],
})
class ModalWrapperComponent {
  isOpen = false;
  size: any = 'md';
  closeOnBackdropClick = true;
  showCloseButton = true;
  hasHeader = true;
  hasFooter = true;
}

const meta: Meta<ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ModalWrapperComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    closeOnBackdropClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ModalWrapperComponent>;

export const Default: Story = {
  render: () => ({
    template: '<modal-wrapper></modal-wrapper>',
  }),
};

export const SmallSize: Story = {
  render: () => ({
    template: '<modal-wrapper></modal-wrapper>',
    props: { size: 'sm' },
  }),
};

export const LargeSize: Story = {
  render: () => ({
    template: '<modal-wrapper></modal-wrapper>',
    props: { size: 'lg' },
  }),
};

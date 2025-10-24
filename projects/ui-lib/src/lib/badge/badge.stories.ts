import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  render: () => ({
    template: '<ui-badge variant="primary">Primary</ui-badge>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <ui-badge variant="primary">Primary</ui-badge>
        <ui-badge variant="secondary">Secondary</ui-badge>
        <ui-badge variant="success">Success</ui-badge>
        <ui-badge variant="warning">Warning</ui-badge>
        <ui-badge variant="error">Error</ui-badge>
        <ui-badge variant="info">Info</ui-badge>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <ui-badge size="sm">Small</ui-badge>
        <ui-badge size="md">Medium</ui-badge>
        <ui-badge size="lg">Large</ui-badge>
      </div>
    `,
  }),
};

export const Dots: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <ui-badge variant="primary" [dot]="true"></ui-badge>
          <span>Available</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <ui-badge variant="success" [dot]="true"></ui-badge>
          <span>Online</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <ui-badge variant="error" [dot]="true"></ui-badge>
          <span>Offline</span>
        </div>
      </div>
    `,
  }),
};

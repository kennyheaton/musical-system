import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Success: Story = {
  render: () => ({
    template:
      '<ui-alert variant="success" title="Success">Your changes have been saved successfully!</ui-alert>',
  }),
};

export const Warning: Story = {
  render: () => ({
    template:
      '<ui-alert variant="warning" title="Warning">Please review your information before submitting.</ui-alert>',
  }),
};

export const Error: Story = {
  render: () => ({
    template:
      '<ui-alert variant="error" title="Error">There was an error processing your request.</ui-alert>',
  }),
};

export const Info: Story = {
  render: () => ({
    template:
      '<ui-alert variant="info" title="Information">New features are available in this release.</ui-alert>',
  }),
};

export const Dismissible: Story = {
  render: () => ({
    template:
      '<ui-alert variant="info" title="Dismissible Alert" [dismissible]="true">You can dismiss this alert by clicking the X button.</ui-alert>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ui-alert variant="success" title="Success">Operation completed successfully!</ui-alert>
        <ui-alert variant="warning" title="Warning">Please be careful with this action.</ui-alert>
        <ui-alert variant="error" title="Error">Something went wrong.</ui-alert>
        <ui-alert variant="info" title="Info">Here's some helpful information.</ui-alert>
        <ui-alert variant="info" [dismissible]="true">This alert can be dismissed.</ui-alert>
      </div>
    `,
  }),
};

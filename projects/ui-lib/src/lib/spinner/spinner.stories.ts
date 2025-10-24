import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner';

const meta: Meta<SpinnerComponent> = {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {
  render: () => ({
    template: '<ui-spinner></ui-spinner>',
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <ui-spinner size="sm"></ui-spinner>
        <ui-spinner size="md"></ui-spinner>
        <ui-spinner size="lg"></ui-spinner>
        <ui-spinner size="xl"></ui-spinner>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <ui-spinner color="primary"></ui-spinner>
        <ui-spinner color="secondary"></ui-spinner>
        <ui-spinner color="success"></ui-spinner>
        <ui-spinner color="warning"></ui-spinner>
        <ui-spinner color="error"></ui-spinner>
      </div>
    `,
  }),
};

export const InButton: Story = {
  render: () => ({
    template: `
      <button style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: #2196f3; color: white; border: none; border-radius: 4px;">
        <ui-spinner size="sm" color="white"></ui-spinner>
        <span>Loading...</span>
      </button>
    `,
  }),
};

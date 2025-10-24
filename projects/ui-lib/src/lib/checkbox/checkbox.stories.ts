import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  render: () => ({
    template: '<ui-checkbox label="Accept terms and conditions"></ui-checkbox>',
  }),
};

export const Checked: Story = {
  render: () => ({
    template: '<ui-checkbox label="Pre-checked" [checked]="true"></ui-checkbox>',
    props: { checked: true },
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: '<ui-checkbox label="Disabled checkbox" [disabled]="true"></ui-checkbox>',
  }),
};

export const WithoutLabel: Story = {
  render: () => ({
    template: '<ui-checkbox></ui-checkbox>',
  }),
};

export const Multiple: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ui-checkbox label="Option 1"></ui-checkbox>
        <ui-checkbox label="Option 2" [checked]="true"></ui-checkbox>
        <ui-checkbox label="Option 3"></ui-checkbox>
        <ui-checkbox label="Disabled option" [disabled]="true"></ui-checkbox>
      </div>
    `,
  }),
};

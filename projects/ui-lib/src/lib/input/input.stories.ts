import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [type]="type" [size]="size"></ui-input>',
  }),
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [helperText]="helperText" [size]="size"></ui-input>',
  }),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [type]="type" [error]="error" [size]="size"></ui-input>',
  }),
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    required: true,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [required]="required" [size]="size"></ui-input>',
  }),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [disabled]="disabled" [size]="size"></ui-input>',
  }),
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [type]="type" [size]="size"></ui-input>',
  }),
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
  },
  render: (args) => ({
    props: args,
    template: '<ui-input [label]="label" [placeholder]="placeholder" [size]="size"></ui-input>',
  }),
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: '<ui-input [label]="label" [placeholder]="placeholder" [size]="size"></ui-input>',
  }),
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'Takes full width',
    fullWidth: true,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-input [label]="label" [placeholder]="placeholder" [fullWidth]="fullWidth" [size]="size"></ui-input>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <ui-input label="Text Input" placeholder="Enter text"></ui-input>
        <ui-input label="Email" type="email" placeholder="user@example.com"></ui-input>
        <ui-input label="Password" type="password" placeholder="Enter password"></ui-input>
        <ui-input label="With Helper" placeholder="Enter value" helperText="This is helper text"></ui-input>
        <ui-input label="With Error" placeholder="Enter value" error="This field has an error"></ui-input>
        <ui-input label="Required Field" placeholder="Required" [required]="true"></ui-input>
        <ui-input label="Disabled" placeholder="Cannot edit" [disabled]="true"></ui-input>
      </div>
    `,
  }),
};

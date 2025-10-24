import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML type attribute of the button',
    },
    clicked: {
      action: 'clicked',
      description: 'Event emitted when button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    loading: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" [loading]="loading" (clicked)="clicked($event)">Primary Button</ui-button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Secondary Button</ui-button>',
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Success Button</ui-button>',
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Warning Button</ui-button>',
  }),
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Error Button</ui-button>',
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Ghost Button</ui-button>',
  }),
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Small Button</ui-button>',
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: '<ui-button [variant]="variant" [size]="size">Large Button</ui-button>',
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-button [variant]="variant" [size]="size" [disabled]="disabled">Disabled Button</ui-button>',
  }),
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-button [variant]="variant" [size]="size" [loading]="loading">Loading Button</ui-button>',
  }),
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template:
      '<ui-button [variant]="variant" [size]="size" [fullWidth]="fullWidth">Full Width Button</ui-button>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <ui-button variant="primary">Primary</ui-button>
          <ui-button variant="secondary">Secondary</ui-button>
          <ui-button variant="success">Success</ui-button>
          <ui-button variant="warning">Warning</ui-button>
          <ui-button variant="error">Error</ui-button>
          <ui-button variant="ghost">Ghost</ui-button>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <ui-button size="sm">Small</ui-button>
          <ui-button size="md">Medium</ui-button>
          <ui-button size="lg">Large</ui-button>
        </div>
      </div>
    `,
  }),
};

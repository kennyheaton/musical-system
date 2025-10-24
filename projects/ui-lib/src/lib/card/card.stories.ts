import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'The visual style variant of the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The padding size for the card body',
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 0.5rem 0;">Card Title</h3>
        <p style="margin: 0; color: #666;">This is a basic card with default styling. It can contain any content you want to display.</p>
      </ui-card>
    `,
  }),
};

export const WithHeaderAndFooter: Story = {
  args: {
    variant: 'default',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <div card-header>
          <h3 style="margin: 0;">Card Header</h3>
        </div>
        
        <p style="margin: 0;">This card has a header and footer section. The content goes in the body.</p>
        
        <div card-footer style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
          <button style="padding: 0.5rem 1rem; border: none; background: #2196f3; color: white; border-radius: 4px; cursor: pointer;">Confirm</button>
        </div>
      </ui-card>
    `,
  }),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 0.5rem 0;">Outlined Card</h3>
        <p style="margin: 0;">This card has an outlined variant with a thicker border and no shadow.</p>
      </ui-card>
    `,
  }),
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 0.5rem 0;">Elevated Card</h3>
        <p style="margin: 0;">This card has a larger shadow for a more elevated appearance.</p>
      </ui-card>
    `,
  }),
};

export const Hoverable: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding" [hoverable]="hoverable">
        <h3 style="margin: 0 0 0.5rem 0;">Hoverable Card</h3>
        <p style="margin: 0;">Hover over this card to see the effect!</p>
      </ui-card>
    `,
  }),
};

export const NoPadding: Story = {
  args: {
    variant: 'default',
    padding: 'none',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" style="width: 100%; height: 200px; object-fit: cover;" />
        <div style="padding: 1rem;">
          <h3 style="margin: 0 0 0.5rem 0;">Image Card</h3>
          <p style="margin: 0;">This card has no body padding, useful for images.</p>
        </div>
      </ui-card>
    `,
  }),
};

export const SmallPadding: Story = {
  args: {
    variant: 'default',
    padding: 'sm',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 0.25rem 0; font-size: 0.875rem;">Small Padding</h3>
        <p style="margin: 0; font-size: 0.75rem;">Compact card with minimal padding.</p>
      </ui-card>
    `,
  }),
};

export const LargePadding: Story = {
  args: {
    variant: 'default',
    padding: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 0.5rem 0;">Large Padding</h3>
        <p style="margin: 0;">This card has generous padding for a more spacious feel.</p>
      </ui-card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
        <ui-card variant="default">
          <h3 style="margin: 0 0 0.5rem 0;">Default</h3>
          <p style="margin: 0; color: #666;">Standard card style</p>
        </ui-card>
        
        <ui-card variant="outlined">
          <h3 style="margin: 0 0 0.5rem 0;">Outlined</h3>
          <p style="margin: 0; color: #666;">Outlined border style</p>
        </ui-card>
        
        <ui-card variant="elevated">
          <h3 style="margin: 0 0 0.5rem 0;">Elevated</h3>
          <p style="margin: 0; color: #666;">Enhanced shadow</p>
        </ui-card>
        
        <ui-card variant="default" [hoverable]="true">
          <h3 style="margin: 0 0 0.5rem 0;">Hoverable</h3>
          <p style="margin: 0; color: #666;">Hover to see effect</p>
        </ui-card>
      </div>
    `,
  }),
};

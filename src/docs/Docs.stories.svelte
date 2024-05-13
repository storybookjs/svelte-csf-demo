<script lang="ts" context="module">
  import DocsComponent from './DocsComponent.svelte';
  import type { Meta } from '@storybook/svelte';
  import { Story, Template } from '@storybook/addon-svelte-csf';

  /**
   * This is a description for the `meta` of regular CSF.
   */
  export const meta = {
    title: 'Docs/Svelte CSF',
    component: DocsComponent,
    tags: ['autodocs'],
  } satisfies Meta<DocsComponent>;
</script>

<Template let:args>
  <DocsComponent {...args} />
</Template>

<!-- This is a description for the _primary_ story, `NoArgs`. -->
<Story name="NoArgs" />

<Story name="TrueArgs" args={{ someBoolProp: true }}/>

<Story name="FalseArgs" args={{ someBoolProp: false }}/>

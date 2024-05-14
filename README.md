# Storybook Svelte CSF Demo

This is a project demonstrating the usage of Svelte CSF as implemented in [`@storybook/addon-svelte-csf`](https://github.com/storybookjs/addon-svelte-csf).

The purpose of this project is _not_ to document the addon, nor to show off how great it is, but rather to compare the usage of Storybook's features between Svelte CSF and regular CSF3.

With this we're hoping to gain insights into how the features map to this alternative language, where it falls short and where it excels.

## Overview

These are the following Storybook features we attempt to uncover in this project and their current conclusion:

<!-- prettier-ignore-start -->

| Status | Feature | Links |
| ------ | ------- | ----- |
| ⏳     | [`title`](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy#naming-stories) |  |
| ⏳     | [`name`](https://storybook.js.org/docs/writing-stories#rename-stories) |  |  |
| ⏳     | `component` |  |  |
| ⏳     | [`subcomponents`](https://storybook.js.org/docs/writing-stories/stories-for-multiple-components)  |  |  |
| ⏳     | [`argTypes`](https://storybook.js.org/docs/api/arg-types#argtypes)  |  |  |
| ⏳     | [`args`](https://storybook.js.org/docs/writing-stories/args)  |  |  |
| ⏳     | [`parameters`](https://storybook.js.org/docs/writing-stories/parameters)  |  |  |
| ⏳     | [`beforeEach`](https://storybook.js.org/docs/8.1/writing-stories/mocking-modules#using-mocked-modules-in-stories) |  |  |
| ⏳     | [`loaders`](https://storybook.js.org/docs/writing-stories/loaders)  |  |  |
| ⏳     | [`decorators`](https://storybook.js.org/docs/writing-stories/decorators)  |  |  |
| ⏳     | [`render`](https://storybook.js.org/docs/api/csf#custom-render-functions)  |  |  |
| ⏳     | [`play`](https://storybook.js.org/docs/writing-stories/play-function)  |  |  |
| 🟡     | [How to type the meta object and stories](https://storybook.js.org/docs/writing-stories/typescript)   | [PR](https://github.com/storybookjs/svelte-csf-demo/pull/3), [stories](https://main--663faba8e103e55dccd640dc.chromatic.com/?path=/docs/typed) |
| ⏳     | [JSDoc comments as descriptions](https://storybook.js.org/docs/api/doc-block-description#writing-descriptions) (from component, meta and stories)  |  |  |
| 🟡     | [Docs](https://storybook.js.org/docs/writing-docs/mdx), including autodocs, MDX docs and `useOf` | [PR](https://github.com/storybookjs/svelte-csf-demo/pull/1), [stories](https://main--663faba8e103e55dccd640dc.chromatic.com/?path=/docs/docs) |
| ⏳     | [Non-story exports](https://storybook.js.org/docs/api/csf#non-story-exports)  |  |  |

<!-- prettier-ignore-end -->

- ⏳: No demo yet
- ✅: Demoed, no problems
- 🟡: Demoed, minor problems
- 🔴: Demoed, major problems

## References

- See [the originally RFC](https://github.com/storybookjs/storybook/discussions/27092) for context about this demo project.
- [Published Storybook](https://main--663faba8e103e55dccd640dc.chromatic.com)

## Contributing

Everyone is welcome to contribute demonstrations of any of the above mentioned features, or other features that we might have missed, by opening pull requests.

A few guide lines:

1. **One feature per pull request**. Don't attempt to build demos for multiple features in the same pull request, it makes it harder to discuss the implementations and review them.
2. **Don't ask to be assigned a feature**. There's no need to be assigned a feature or to reserve it. If you want to contribute, just ask questions, open issues or pull requests. History shows that contributors being assigned to tasks often don't finish them, but still blocks other contributors from picking them up.
3. **Be explicit in the demo's intend**. Eg. if you're building a demo for `argTypes`, don't create a `Button.svelte` component and `Button.stories.svelte` stories and come up with examples for how to write `argTypes` for buttons. Instead, build an `ArgTypes.svelte` component and stories that clearly and _only_ demonstrates `argTypes`.

See [PR #1](https://github.com/storybookjs/svelte-csf-demo/pull/1) for an example of all of this.

### Prerequiristes

- Node.js version >=18.20.2
- pnpm version 9.1.0

### Getting started

1. Install dependencies with `pnpm install`
2. Start Storybook with `pnpm storybook`

import { runInRepo } from '../utils.ts';
import type { RunOptions } from '../types.d.ts';

export async function build(options: RunOptions) {
	return runInRepo({
		...options,
		repo: 'withastro/astro',
		build: 'build',
	});
}

export const packages = {
	'@astrojs/internal-helpers': 'packages/internal-helpers',
	'@astrojs/markdown-remark': 'packages/markdown/remark',
	'@astrojs/telemetry': 'packages/telemetry',
	'@astrojs/mdx': 'packages/integrations/mdx',
	'@astrojs/vue': 'packages/integrations/vue',
	'@astrojs/tailwind': 'packages/integrations/tailwind',
	'@astrojs/preact': 'packages/integrations/preact',
	'@astrojs/react': 'packages/integrations/react',
	'@astrojs/solid-js': 'packages/integrations/solid-js',
	'@astrojs/svelte': 'packages/integrations/svelte',
	'@astrojs/prism': 'packages/astro-prism',
};

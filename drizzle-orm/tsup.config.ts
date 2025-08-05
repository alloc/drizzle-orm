import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const entries = globSync('src/**/*.ts', {
	ignore: '**/*{bun,d1,gel,sqlite,mysql,libsql,planetscale,singlestore,sql-js,tidb}*/**',
});

export default defineConfig({
	entry: entries,
	outDir: 'dist.new',
	format: ['cjs', 'esm'],
	bundle: false,
	splitting: false,
	outExtension({ format }) {
		return {
			js: format === 'cjs' ? '.cjs' : '.js',
		};
	},
	tsconfig: 'tsconfig.build.json',
});

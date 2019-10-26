import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: './src/ractive-transitions-css.js',
		output: {
			file: './dist/ractive-transitions-css.umd.js',
			format: 'umd',
			name: 'Ractive.transitions.css',
			sourcemap: true,
			sourcemapExcludeSources: true
		},
		plugins: [
			terser({
				sourcemap: true
			})
		]
	},
	{
		input: './src/ractive-transitions-css.js',
		output: {
			file: './dist/ractive-transitions-css.es.js',
			format: 'es',
			sourcemap: true,
			sourcemapExcludeSources: true
		},
		plugins: [
			terser({
				sourcemap: true
			})
		]		
	}
];
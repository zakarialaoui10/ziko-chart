
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const banner= `
/*
  Project: ziko-chart
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/ziko-chart
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/ziko-chart.cjs',
    format: 'cjs',
    banner,
    globals: {
      ziko: 'Ziko'
    }
  },{
    file: 'dist/ziko-chart.mjs',
    format: 'es',
    banner,
    globals: {
      ziko: 'Ziko'
    }
  },
  {
    file: 'dist/ziko-chart.js',
    format: 'umd',
    banner,
    name:"ZikoChart",
    globals: {
      ziko: 'Ziko'
    }
  }
],
  external: ["ziko"],
  plugins: [
    resolve(), 
    commonjs(),
    //,terser()
    ],
};

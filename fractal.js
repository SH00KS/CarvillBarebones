'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Carvill Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

fractal.components.set('ext', '.html');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

const Vue = require('vue');

fractal.components.set('engine', '@swey/fractal-vue-adapter');
fractal.components.set('ext', '.(vue|html)');
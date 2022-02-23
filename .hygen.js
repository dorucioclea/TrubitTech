const inflection = require('inflection')
const path = require('path')

module.exports = {
  templates: path.resolve(__dirname, '.templates'),
  helpers: {
    inflection,
    componentCase: inflection.classify,
    paths: {
      components: path.resolve(
        __dirname,
        'packages/web-playground/src/components',
      ),
      features: path.resolve(__dirname, 'packages/web-playground/src/features'),
    },
  },
}

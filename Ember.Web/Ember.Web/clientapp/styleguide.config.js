module.exports = {
  title: 'Style Guide',
  defaultExample: false,
  exampleMode: 'collapse',
  styleguideDir: 'docs',
  displayOrigins: true,
  usageMode: 'expand',
  sections: [
    {
      name: 'Introduction',
      content: './README.md'
    },
    {
      sections: [
        {
          name: 'Components',
          components: 'src/components/**/*.vue'
        },
        {
          name: 'Pages',
          components: 'src/pages/*.vue'
        }
      ]
    }
  ]
};
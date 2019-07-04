module.exports = {
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
      }
    ]  
  ],
  themeConfig: {
    sidebar: 'auto',
  },

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'english', // this will be set as the lang attribute on <html>
      title: 'MONITOR™',
      description: 'Documentations of MONITOR™'
    },
    '/zh/': {
      lang: '日本語',
      title: 'MONITOR™',
      description: 'Documentations of MONITOR™'
    }
  }
}

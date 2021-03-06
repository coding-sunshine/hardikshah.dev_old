const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'Hardik Shah',
  siteUrl: `https://hardikshah.dev`,
  titleTemplate: '%s - Hardik Shah',
  siteDescription: 'I\'m a full-stack developer based in Melbourne, Victoria specializing in building (and occasionally designing) high-quality websites and applications. 🚀',
  icon: {
    favicon: {
      src: './src/assets/images/only-logo.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/assets/images/only-logo.png',
      sizes: [76, 152, 120, 167],
      precomposed: false
    }
  },
  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
        .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
         ]
      }))
    }
  },

  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug',
    Contributor: '/contributor/:id',
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-160072651-2'
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'experience/*.md',
        typeName: 'Experiences',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './blog/*/index.md',
        refs: {
          author: 'Contributor'
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#0D2836',
        icon_path: './src/assets/images/only-logo.png',
        name: 'Hardik Shah',
        short_name: 'Hardik',
        theme_color: '#73CBE2',
        lang: 'en',
      },
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          routes: [
            '/',
            /\.(js|css|png|svg|jpg|jpeg)$/,
          ],
        },
      },
    },
  ]
}

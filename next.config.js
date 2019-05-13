const path = require('path')
// const withSass = require('@zeit/next-sass')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig = {
  cssModules: true,
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.plugins.push(
      new MiniCssExtractPlugin(),
    )

    config.module.rules.push(
      {
        test: /\.css$/,
        include: path.join(__dirname, "styles"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[local]__[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
            },
          },
          // {
          //   loader: 'sass-loader',
          // }
        ]
      },
    )

    return config
  }
}

//module.exports = withSass(nextConfig)
//module.exports = withSass()
module.exports = nextConfig

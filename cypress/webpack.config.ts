import { Configuration } from 'webpack'

const webpackConfig: Configuration = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': '/Users/brunoamui/Code/vtex/devportal/src',
      'components': '/Users/brunoamui/Code/vtex/devportal/src/components',
      'utils': '/Users/brunoamui/Code/vtex/devportal/src/utils',
      'styles': '/Users/brunoamui/Code/vtex/devportal/src/styles'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

export default webpackConfig
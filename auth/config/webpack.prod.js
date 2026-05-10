const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJsonDeps = require('../package.json');


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            exposes: {
                './AuthApp': './src/bootstrap'
            },  
            shared: packageJsonDeps.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
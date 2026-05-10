const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJsonDeps = require('../package.json');


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dashboard/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            exposes: {
                './DashboardApp': './src/bootstrap'
            },  
            shared: packageJsonDeps.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
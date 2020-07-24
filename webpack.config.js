const path = require( 'path' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const TerserJSPlugin = require( 'terser-webpack-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' );

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    };

    if ( isProd ) {
        config.minimizer = [
            new OptimizeCSSAssetsPlugin(),
            new TerserJSPlugin(),
        ];
    }

    return config;
};

const filename = ext => isDev ? `[name].${ ext }` : `[name].[hash].${ ext }`;
const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: [ '@babel/preset-env' ],
            },
        },
    ];

    if ( isDev ) {
        loaders.push( 'eslint-loader' );
    }

    return loaders;
};

module.exports = {
    context: path.resolve( __dirname, 'src' ),
    mode: 'development',
    entry: [ '@babel/polyfill', './js/index.js' ],
    output: {
        filename: filename( 'js' ),
        path: path.resolve( __dirname, 'build' ),
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            '@': path.resolve( __dirname, 'src' ),
        },
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev,
    },
    optimization: optimization(),
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin( {
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        } ),
        new CopyPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, 'src/favicon.ico' ),
                    to: path.resolve( __dirname, 'build' ),
                },
            ],
        } ),
        new MiniCssExtractPlugin( {
            filename: filename( 'css' ),
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
};

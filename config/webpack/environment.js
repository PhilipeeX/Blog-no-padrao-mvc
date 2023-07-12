const { environment } = require('@rails/webpacker')

// Adiciona o plugin do Babel na configuração do ambiente
const babelLoader = environment.loaders.get('babel')
babelLoader.use.push({
    loader: 'babel-loader',
    options: {
        plugins: [
            // Outros plugins
            '@babel/plugin-proposal-private-methods',
        ],
    },
})

module.exports = environment

module.exports = {
    presets: ['next/babel'], // This line applies the default Babel preset provided by Next.js
    plugins: [['styled-components', { 'ssr': true, 'displayName': true, 'preprocess': false }]]
  };
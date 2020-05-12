module.exports = {
  publicPath: process.env.NODE_ENV === 'qa' || process.env.NODE_ENV === 'production' ?
      '/ember/' :
      '/' // https://localhost:44317/
};
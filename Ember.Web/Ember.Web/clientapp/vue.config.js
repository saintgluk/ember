module.exports = {
  publicPath: process.env.NODE_ENV === 'qa' || process.env.NODE_ENV === 'production' ?
      '/ember/' :
      '/' // http://localhost:50598
};
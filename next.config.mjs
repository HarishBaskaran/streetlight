const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? '/streetlight/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
};

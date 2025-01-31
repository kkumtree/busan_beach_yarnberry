/**
 * @type {import('next').NextConfig}
 */

// ref.
// https://maxrohde.com/2023/01/06/fixing-next-js-error-next-config-options-detected
const nextComposePlugins = require('next-compose-plugins');
const { withPlugins } = nextComposePlugins.extend(() => ({}));
// const withPlugins = require('next-compose-plugins');
// // const withPWA = require('next-pwa');
// // const runtimeCaching = require('next-pwa/cache');
const { NEXT_PUBLIC_ENV } = process.env;
const isLocal = NEXT_PUBLIC_ENV === 'local';
const CONFIG = require(`./config/${NEXT_PUBLIC_ENV}`);
const LOCAL_ORIGIN = 'http://localhost:3000';
const publicRuntimeConfig = {
  NEXT_PUBLIC_ENV,
  ...CONFIG,
};
const nextConfig = {
  reactStrictMode: true,
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  swcMinify: true,
  compiler: {
    emotion: {
      sourceMap: isLocal,
    },
  },
  ...(isLocal && {
    async rewrites() {
      return [
        {
          basePath: false,
          source: '/assets/:path*',
          destination: `${LOCAL_ORIGIN}/:publicfiles`,
        },
      ];
    },
  }),
};

// module.exports = withPWA([
//   [require('next-pwa'), {
//     pwa: {
//       dest: 'public',
//       runtimeCaching,
//       disable: isLocal,
//     },
//   }],
// ], nextConfig);

module.exports = withPlugins([nextConfig]); 
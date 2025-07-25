import type { NextConfig } from 'next';

//const repoName = 'NJ-resume';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/NJ-resume',
  // assetPrefix: '/NJ-resume',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/static/css'],
    silenceDeprecations: ['import'], // Silence @import deprecation warnings
  },
  trailingSlash: true,

  // Turbopack configuration
  turbopack: {
    // Define module resolution rules
    rules: {},
    // Module resolution extensions
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  // Experimental features
  experimental: {
    // Enable optimizations for packages
    optimizePackageImports: ['@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core'],
  },
};

// Only apply bundle analyzer when not using Turbopack
// This prevents the warning about Webpack being configured while Turbopack is not
if (process.env.TURBOPACK !== '1') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });

  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}

export default nextConfig;

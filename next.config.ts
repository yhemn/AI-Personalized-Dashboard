import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/sign-in', destination: '/auth/sign-in', permanent: true },
      { source: '/sign-up', destination: '/auth/sign-up', permanent: true },
      {
        source: '/forgot-password',
        destination: '/auth/forgot-password',
        permanent: true,
      },
      {
        source: '/reset-password',
        destination: '/auth/reset-password',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


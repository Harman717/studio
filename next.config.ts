
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mrakgpp.edu.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mdpi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'satorianalytics.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'b2633864.smushcdn.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

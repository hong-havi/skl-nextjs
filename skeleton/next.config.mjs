/** @type {import('next').NextConfig} */
import path from 'path';

const __dirname = path.resolve();
console.log(path.join(__dirname, 'styles'));

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'public')],
   // prependData: `@use "public/styles/variables as *";`,
  },
  images: {
      domains: ['cdn.domain.com']
  }
};

export default nextConfig;

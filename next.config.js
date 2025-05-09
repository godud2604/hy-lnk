/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // 빌드할 때 ESLint 에러 무시
  },
  typescript: {
    ignoreBuildErrors: true,  // TypeScript 빌드 에러 무시
  },
}

module.exports = nextConfig;

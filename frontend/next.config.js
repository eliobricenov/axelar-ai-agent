/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // see https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
    config.externals.push("pino-pretty", "lokijs", "encoding", "react-native");
    return config;
  },
};

module.exports = nextConfig;

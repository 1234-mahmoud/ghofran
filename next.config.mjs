/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation for pages that might cause SSR issues
  experimental: {
    // This helps with hydration issues
    optimizePackageImports: ['react-icons'],
  },
  // Handle errors during build more gracefully
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Disable static generation for not-found page
  generateStaticParams: async () => {
    return [];
  },
};

export default nextConfig;

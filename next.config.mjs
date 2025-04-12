const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server components since we're using static export
};

export default nextConfig;

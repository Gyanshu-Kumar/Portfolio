const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);

module.exports = {
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/ooye_sanket',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/sanketkalekar/',
        permanent: true,
      },
      {
        source: '/meeting',
        destination: 'https://cal.com/ooye-sanket',
        permanent: true,
      },
      {
        source: '/calcom',
        destination: 'https://cal.com/ooye-sanket',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/ooye.sanket/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/ooye-sanket',
        permanent: true,
      }
    ]
  },
}

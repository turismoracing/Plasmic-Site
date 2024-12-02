
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,
};

module.exports = nextConfig;
/*
@type {import('next').NextConfig}

  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,
module.exports = {
    async redirects() {
        return [{
                source: '/product/black-and-silver-stanza-gaming-recliner',
                destination: '/products/stanza/black',
                permanent: true
            },
            {
                source: '/product/blue-stanza-gaming-recliner',
                destination: '/products/stanza/blue',
                permanent: true
            },
            {
                source: '/product/purple-stanza-gaming-recliner',
                destination: '/products/stanza/purple',
                permanent: true
            },
            {
                source: '/product/infinity-desk-and-chair-promotion',
                destination: '/products/infinity/MAX',
                permanent: true
            },
            {
                source: '/product/red-stanza-gaming-recliner',
                destination: '/products/stanza/red',
                permanent: true
            },
            {
                source: '/product/evoluzione-black-vaporweave-gaming-chair',
                destination: '/products/evoluzione-vaporweave/black',
                permanent: true
            },
            {
                source: '/product/evoluzione-icon-onyx-black-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/evoluzione-icon-black-blue-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/infinity-2023-64-inch-gaming-desk-sale',
                destination: '/products/infinity/64-inches',
                permanent: true
            },
            {
                source: '/product/infinity-2023-64-inch-gaming-desk',
                destination: '/products/infinity/64-inches',
                permanent: true
            },
            {
                source: '/product/infinity-2024-64-inch-gaming-desk',
                destination: '/products/infinity/64-inches',
                permanent: true
            },
            {
                source: '/product/evoluzione-ivory-grey-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/evoluzione-slate-grey-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/evoluzione-xl-black-blue-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/evoluzione-xl-black-grey-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/evoluzione-icon-black-charcoal-gaming-chair',
                destination: '/products/evoluzione-icon/blackCharcoal',
                permanent: true
            },
            {
                source: '/product/blue-stazzione-gaming-desk',
                destination: '/products/stazzione/blue',
                permanent: true
            },
            {
                source: '/product/red-stazzione-gaming-desk',
                destination: '/products/stazzione/red',
                permanent: true
            },
            {
                source: '/product/purple-stazzione-gaming-desk',
                destination: '/products/stazzione/purple',
                permanent: true
            },
            {
                source: '/product/green-stazzione-gaming-desk',
                destination: '/products/stazzione/green',
                permanent: true
            },
            {
                source: '/product/blue-autodromo-desk-with-led-lighting',
                destination: '/products/autodromo/blue',
                permanent: true
            },
            {
                source: '/product/green-autodromo-desk-with-led-lighting',
                destination: '/products/autodromo/green',
                permanent: true
            },
            {
                source: '/product/purple-autodromo-desk-with-led-lighting',
                destination: '/products/autodromo/purple',
                permanent: true
            },
            {
                source: '/product/red-autodromo-desk-with-led-lighting',
                destination: '/products/autodromo/red',
                permanent: true
            },
            {
                source: '/product/infinity-max-2023-72-inch-gaming-desk',
                destination: '/products/infinity/72-inches',
                permanent: true
            },
            {
                source: '/product/ancora-black-grey-blue-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/modena-black-and-blue-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/ancora-black-grey-purple-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/ancora-black-grey-red-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/modena-black-and-red-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/products',
                destination: '/',
                permanent: true
            },
            {
                source: '/cart',
                destination: '/',
                permanent: true
            },
            {
                source: '/product/replacement-mouse-mat-for-autodromo-stazzione-infinity',
                destination: '/accessories/mousepad/black',
                permanent: true
            },
            {
                source: '/product/dual-monitor-mount',
                destination: '/accessories/monitor-mount/dual',
                permanent: true
            },
            {
                source: '/product/single-monitor-mount',
                destination: '/accessories/monitor-mount/single',
                permanent: true
            },
            {
                source: '/product/triple-monitor-mount',
                destination: '/accessories/monitor-mount/triple',
                permanent: true
            },
            {
                source: '/product/under-desk-headphone-hanger',
                destination: '/accessories/headphone-hanger/silver',
                permanent: true
            },
            {
                source: '/product/playstation-icons-light-with-3-light-modes',
                destination: '/accessories/playstation-lights',
                permanent: true
            },
            {
                source: '/product/chair-floor-mat',
                destination: '/accessories/chair-floor-mat/black',
                permanent: true
            },
            {
                source: '/product/green-chair-floor-mat',
                destination: '/accessories/chair-floor-mat/green',
                permanent: true
            },
            {
                source: '/product/red-chair-floor-mat',
                destination: '/accessories/chair-floor-mat/red',
                permanent: true
            },
            {
                source: '/product/purple-chair-floor-mat',
                destination: '/accessories/chair-floor-mat/purple',
                permanent: true
            },
            {
                source: '/product/blue-chair-floor-mat',
                destination: '/accessories/chair-floor-mat/blue',
                permanent: true
            },
            {
                source: '/product/rgb-led-corner-floor-lamp',
                destination: '/accessories/corner-floor-lamp',
                permanent: true
            },
            {
                source: '/product/special-price-bundle-blue-ancora-gaming-chair-and-blue-decagon-gaming-desk',
                destination: '/',
                permanent: true
            },
            {
                source: '/product/special-price-bundle-red-ancora-gaming-chair-and-red-decagon-gaming-desk',
                destination: '/',
                permanent: true
            },
            {
                source: '/product/black-chair-floor-mat',
                destination: '/accessories/chair-floor-mat/black',
                permanent: true
            },
            {
                source: '/product/modena-black-and-grey-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/modena-black-and-pink-gaming-chair',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/product/replacement-led-lighting-for-gaming-desk',
                destination: '/accessories/led-lighting/green',
                permanent: true
            },
            {
                source: '/product/blue-decagon-gaming-desk',
                destination: '/collections/desks',
                permanent: true
            },
            {
                source: '/product/red-decagon-gaming-desk',
                destination: '/collections/desks',
                permanent: true
            },
            {
                source: '/products/infinity-64-inches',
                destination: '/products/infinity/64-inches',
                permanent: true
            },
            {
                source: '/products/infinity-72-inches',
                destination: '/products/infinity/72-inches',
                permanent: true
            },
            {
                source: '/products/infinity/max',
                destination: '/products/infinity/72-inches',
                permanent: true
            },
            {
                source: '/products/infinity/infinity',
                destination: '/products/infinity/64-inches',
                permanent: true
            },
            {
                source: '/products/infinity/[variant]',
                destination: '/products/infinity/72-inches',
                permanent: true
            },
            {
                source: '/products/infinity',
                destination: '/products/infinity/72-inches',
                permanent: true
            },
            {
                source: '/products/infinity/MAX',
                destination: '/products/infinity/72-inches',
                permanent: true
            },
            {
                source: '/products/infinity/Infinity',
                destination: '/products/infinity/64-inches',
                permanent: true
            },
            {
                source: '/products/autodromo',
                destination: '/products/autodromo/green',
                permanent: true
            },
            {
                source: '/products/stazzione',
                destination: '/products/stazzione/purple',
                permanent: true
            },
            {
                source: '/products/evoluzione-icon',
                destination: '/products/evoluzione-icon/blackBlue',
                permanent: true
            },
            {
                source: '/products/evoluzione-vaporweave',
                destination: '/products/evoluzione-vaporweave/ivoryGrey',
                permanent: true
            },
            {
                source: '/products/evoluzione-xl',
                destination: '/products/evoluzione-xl/blackBlue',
                permanent: true
            },
            {
                source: '/products/stanza',
                destination: '/products/stanza/red',
                permanent: true
            },
            {
                source: '/accessories/mousepad',
                destination: '/accessories/mousepad/black',
                permanent: true
            },
            {
                source: '/accessories/monitor-mount',
                destination: '/accessories/monitor-mount/dual',
                permanent: true
            },
            {
                source: '/accessories/chair-floor-mat',
                destination: '/accessories/chair-floor-mat/black',
                permanent: true
            },
            {
                source: '/accessories/headphone-hanger',
                destination: '/accessories/headphone-hanger/silver',
                permanent: true
            },
            {
                source: '/accessories/led-lighting',
                destination: '/accessories/led-lighting/green',
                permanent: true
            },
            {
                source: '/discount/1JM6J5QDVH2N?redirect=/collections/evoluzione',
                destination: '/collections/chairs',
                permanent: true
            },
            {
                source: '/sitemap-index.xml',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap.php',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap.txt',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap.xml.gz',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap/',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap/sitemap.xml',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemapindex.xml',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap/index.xml',
                destination: '/sitemap.xml',
                permanent: true
            },
            {
                source: '/sitemap1.xml',
                destination: '/sitemap.xml',
                permanent: true
            },
        ];
    },
};
*/

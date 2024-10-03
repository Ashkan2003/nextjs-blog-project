/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "nabsteel.rahkartest.ir",
                port: '',
                pathname: '/wp-content/uploads/2024/04/card-3.webp/**',
            },
        ]
    }
};

export default nextConfig;

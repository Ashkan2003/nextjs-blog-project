/** @type {import('next').NextConfig} */
const nextConfig = {
    // config next-image remote-img-url
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "jqwssvvtzamgbbioroul.supabase.co",
                port: '',
                pathname: '/storage/v1/object/public/post-imgs/**',
            },
        ]
    }
};

export default nextConfig;

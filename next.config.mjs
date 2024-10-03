/** @type {import('next').NextConfig} */
const nextConfig = {
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

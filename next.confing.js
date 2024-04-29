// @ts-check


 
/** @type {import('next').NextConfig} */
export const images = {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
        {
            protocol: "https",
            pathname: "/public/**",
        }
    ]
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/whatsapp", destination: "/services", permanent: false },
      { source: "/chat-agent", destination: "/services", permanent: false },
      { source: "/clone-agent", destination: "/services", permanent: false },
      { source: "/market-intel", destination: "/services", permanent: false },
      { source: "/voice-clone", destination: "/services", permanent: false },
      { source: "/email", destination: "/services", permanent: false },
    ];
  },
};

export default nextConfig;

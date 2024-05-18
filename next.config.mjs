/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...nextConfig,
  ...withVideos(),
};

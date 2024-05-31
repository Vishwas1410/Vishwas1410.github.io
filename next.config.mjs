import {withSentryConfig} from "@sentry/nextjs";
// /** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    typescript:{
        ignoreBuildErrors: true,
    }
};

export default withSentryConfig(nextConfig, {

org: "vishwas-chauhan",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: true,

widenClientFileUpload: true,

hideSourceMaps: true,

disableLogger: true,

automaticVercelMonitors: true,
});
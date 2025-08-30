import type { NextConfig } from "next";

const isReplit = Boolean(process.env.REPLIT_DEV_DOMAIN);

const nextConfig: NextConfig = {
  // Allow dev origins to prevent cross-origin warnings
  ...(process.env.NODE_ENV === "development" && {
    allowedDevOrigins: [
      ...(process.env.REPLIT_DEV_DOMAIN ? [process.env.REPLIT_DEV_DOMAIN] : []),
      "http://127.0.0.1:5000",
      "http://localhost:5000",
    ],
  }),

  // Use Webpack on Replit
  ...(isReplit
    ? {
        webpack: (config) => {
          config.module.rules.push({
            test: /\.svg$/,
            use: [
              {
                loader: "@svgr/webpack",
                options: {
                  icon: true,
                  svgoConfig: {
                    plugins: [
                      {
                        name: "preset-default",
                        params: {
                          overrides: { removeViewBox: false },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          });
          return config;
        },
      }
    : {
        // Use Turbopack everywhere else
        turbopack: {
          rules: {
            "*.svg": {
              loaders: [
                {
                  loader: "@svgr/webpack",
                  options: {
                    icon: true,
                    svgoConfig: {
                      plugins: [
                        {
                          name: "preset-default",
                          params: {
                            overrides: { removeViewBox: false },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              as: "*.js",
            },
          },
        } as any,
      }),
};

export default nextConfig;

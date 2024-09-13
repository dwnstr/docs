const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: "/ulc/configuration/stage-controls", // The old path
        destination: "/ulc/configuration/buttons", // The new path you want to redirect to
        permanent: true, // Indicates if this is a permanent redirect (status code 308)
      },
    ];
  },
});

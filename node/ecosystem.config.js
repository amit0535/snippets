module.exports = {
    apps: [
      {
        script: "server.js",
        name: "server",
        watch: false,
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  
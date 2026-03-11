module.exports = {
  apps: [
    {
      name: "bi-booster-fe",
      script: "npm",
      args: "run start",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
      },
    },
  ],
};

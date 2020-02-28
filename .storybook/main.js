module.exports = {
  stories: ["./welcome.stories.js", "../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-actions/register",
    "storybook-addon-jsx/register",
    "@storybook/addon-knobs/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};

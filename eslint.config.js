import airbnb from "eslint-config-airbnb";
import prettier from "eslint-config-prettier";

export default [
  airbnb,
  prettier,
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": ["error"],
    },
  },
];

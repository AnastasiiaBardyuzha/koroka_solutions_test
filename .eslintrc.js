module.exports = {
  extends: "@mate-academy/eslint-config-react-typescript",
  "rules": {
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
  }
};


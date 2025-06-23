/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-order-config-standard',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-template'],
      },
    ],
    'selector-class-pattern': false,
    'no-descending-specificity': false,
  },
};

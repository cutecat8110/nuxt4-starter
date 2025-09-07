/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard-scss', // 繼承：SCSS 標準規則
    'stylelint-config-recommended-vue', // 繼承：Vue 推薦規則
  ],

  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html', // .vue 解析：postcss-html
    },
  ],

  rules: {
    'comment-no-empty': true, // 空註解：禁止
    'color-function-notation': 'legacy', // 顏色函式：legacy
    'alpha-value-notation': 'number', // 透明度：number

    'scss/dollar-variable-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected variable to be in kebab-case',
      },
    ], // SCSS 變數：kebab-case

    'scss/selector-no-redundant-nesting-selector': true, // SCSS 嵌套：禁止多餘的 &

    'order/properties-order': [
      {
        // 1. 定位
        groupName: 'positioning',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'display',
          'float',
          'clear',
        ],
      },
      {
        // 2. 盒模型與佈局
        groupName: 'box-model',
        properties: [
          'flex',
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-items',
          'align-content',
          'align-self',
          'order',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'padding',
          'border',
          'border-radius',
          'overflow',
          'overflow-x',
          'overflow-y',
        ],
      },
      {
        // 3. 排版
        groupName: 'typography',
        properties: [
          'color',
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
          'line-height',
          'text-align',
          'text-decoration',
          'text-transform',
          'white-space',
          'word-wrap',
          'word-break',
          'letter-spacing',
        ],
      },
      {
        // 4. 外觀與動畫
        groupName: 'visual',
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-position',
          'background-size',
          'opacity',
          'visibility',
          'cursor',
          'transition',
          'animation',
        ],
      },
    ], // CSS 屬性排序
  },
}

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    // 屬性排序規則
    'order/properties-order': [
      [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'display',
        'flex',
        'flex-direction',
        'justify-content',
        'align-items',
        'width',
        'height',
        'margin',
        'padding',
        'font-size',
        'font-weight',
        'color',
        'background',
        'border',
        'box-shadow',
        'transition',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
}

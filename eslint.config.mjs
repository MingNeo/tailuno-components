import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    type: 'lib',
    formatters: {
      css: true,
      html: true,
    },
    rules: {
      'no-console': 'warn',
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'never',
          selfClosingTag: {
            singleline: 'never',
            multiline: 'never',
          },
        },
      ],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'ignore',
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: Infinity,
        },
        multiline: {
          max: Infinity,
        },
      }],
      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'input', 'svg', 'path', 'div'],
      }],
      'vue/html-indent': ['error', 2, {
        attribute: 1, // 属性缩进级别
        closeBracket: 0, // 闭合标签不缩进
        alignAttributesVertically: false, // 禁用垂直对齐
      }],
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
    ],
  }),
)

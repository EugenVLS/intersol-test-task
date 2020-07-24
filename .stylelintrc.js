module.exports = {
    'extends': [
        'stylelint-config-recommended-scss',
        'stylelint-config-airbnb',
    ],
    'plugins': [
        'stylelint-order',
        'stylelint-scss',
        'stylelint-declaration-block-no-ignored-properties',
    ],
    'rules': {
        'indentation': 4,
        'declaration-block-no-redundant-longhand-properties': [ true, { ignoreShorthands: [] } ],
        'no-missing-end-of-source-newline': null,
        'media-feature-parentheses-space-inside': 'always',
        'selector-list-comma-newline-after': 'always-multi-line',
        'rule-empty-line-before': [ 'always', { except: [ 'first-nested', 'after-single-line-comment' ] } ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: [ 'first-nested' ],
                ignore: [ 'after-comment' ],
                ignoreAtRules: [ 'import', 'else', 'include' ],
            },
        ],
        'max-nesting-depth': [
            3, {
                ignore: [ 'blockless-at-rules', 'pseudo-classes' ],
                ignoreAtRules: [ 'include' ],
            },
        ],
        'string-quotes': null,
        'order/properties-order': [
            [
                {
                    groupName: 'position',
                    properties: [
                        'position',
                        'z-index',
                        'top',
                        'right',
                        'bottom',
                        'left',
                    ],
                },
                {
                    groupName: 'display',
                    properties: [
                        'display',
                        'visibility',
                        'float',
                        'clear',
                    ],
                },
                {
                    groupName: 'overflow',
                    properties: [
                        'overflow',
                        'overflow-x',
                        'overflow-y',

                    ],
                },
                {
                    groupName: 'flex',
                    properties: [
                        'flex',
                        'flex-flow',
                        'flex-basis',
                        'flex-direction',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',
                        'align-content',
                        'align-items',
                        'align-self',
                        'justify-content',
                        'justify-items',
                        'justify-self',
                        'order',
                    ],
                },
                {
                    groupName: 'table',
                    properties: [
                        'table-layout',
                        'empty-cells',
                        'caption-side',
                        'border-spacing',
                        'border-collapse',
                    ],
                },
                {
                    groupName: 'sizing',
                    properties: [
                        'box-sizing',
                        'width',
                        'min-width',
                        'max-width',
                        'height',
                        'min-height',
                        'max-height',
                    ],
                },
                {
                    groupName: 'font',
                    properties: [
                        'font',
                        'font-family',
                        'font-size',
                        'font-style',
                        'font-weight',
                        'font-variant',
                        'font-size-adjust',
                        'font-stretch',
                        'line-height',
                    ],
                },
                {
                    groupName: 'text',
                    properties: [
                        'text-align',
                        'text-align-last',
                        'vertical-align',
                        'white-space',
                        'text-decoration',
                        'text-emphasis',
                        'text-emphasis-color',
                        'text-emphasis-style',
                        'text-emphasis-position',
                        'text-indent',
                        'text-justify',
                        'letter-spacing',
                        'word-spacing',
                        'text-outline',
                        'text-transform',
                        'text-wrap',
                        'text-overflow',
                        'text-overflow-ellipsis',
                        'text-overflow-mode',
                        'word-wrap',
                        'word-break',
                    ],
                },
                {
                    groupName: 'spacing',
                    properties: [
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                    ],
                },
                {
                    groupName: 'list',
                    properties: [
                        'list-style',
                        'list-style-position',
                        'list-style-type',
                        'list-style-image',
                    ],
                },
                {
                    groupName: 'pseudo',
                    properties: [
                        'content',
                        'counter-reset',
                        'counter-increment',

                    ],
                },
                'cursor',
                {
                    groupName: 'border',
                    properties: [
                        'border',
                        'border-width',
                        'border-style',
                        'border-color',
                        'border-top',
                        'border-top-width',
                        'border-top-style',
                        'border-top-color',
                        'border-right',
                        'border-right-width',
                        'border-right-style',
                        'border-right-color',
                        'border-bottom',
                        'border-bottom-width',
                        'border-bottom-style',
                        'border-bottom-color',
                        'border-left',
                        'border-left-width',
                        'border-left-style',
                        'border-left-color',
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-right-radius',
                        'border-bottom-left-radius',
                        'border-image',
                        'border-image-source',
                        'border-image-slice',
                        'border-image-width',
                        'border-image-outset',
                        'border-image-repeat',
                    ],
                },
                {
                    groupName: 'background',
                    properties: [
                        'background',
                        'background-color',
                        'background-image',
                        'background-repeat',
                        'background-attachment',
                        'background-position',
                        'background-position-x',
                        'background-position-y',
                        'background-clip',
                        'background-origin',
                        'background-size',
                    ],
                },
                {
                    groupName: 'transition',
                    properties: [
                        'transition',
                        'transition-delay',
                        'transition-timing-function',
                        'transition-duration',
                        'transition-property',
                        'transform',
                        'transform-origin',
                    ],
                },
                {
                    groupName: 'animation',

                    properties: [
                        'animation',
                        'animation-name',
                        'animation-duration',
                        'animation-play-state',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-direction',
                    ],
                },
            ],
            {
                emptyLineMinimumPropertyThreshold: 4,
            },
        ],
        'order/order': null,
        'plugin/declaration-block-no-ignored-properties': true,
        'no-descending-specificity': null,
    },
};
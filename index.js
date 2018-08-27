"use strict";

module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "at-rule-empty-line-before": null,
    "at-rule-name-space-after": "always",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-opening-brace-space-before": null,
    "color-named": "never",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-empty-line-before": null,
    "declaration-no-important": true,
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": [
      "numeric",
      {
        "ignore": [
          "relative"
        ]
      }
    ],
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "length-zero-no-unit": true,
    "max-empty-lines": 2,
    "max-line-length": null,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "never",
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "no-empty-source": null,
    "number-leading-zero": "never",
    "media-feature-name-no-unknown": [
      true,
      {
        "ignoreMediaFeatureNames": [
          "prefers-reduced-motion"
        ]
      }
    ],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "box-sizing",
      "display",
      "flex",
      "flex-align",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "flex-shrink",
      "flex-grow",
      "flex-order",
      "flex-pack",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "order",
      "float",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "overflow",
      "overflow-x",
      "overflow-y",
      "-webkit-overflow-scrolling",
      "-ms-overflow-x",
      "-ms-overflow-y",
      "-ms-overflow-style",
      "columns",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-span",
      "column-width",
      "orphans",
      "widows",
      "clip",
      "clear",
      "font",
      "font-family",
      "font-size",
      "font-style",
      "font-weight",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "src",
      "hyphens",
      "line-height",
      "color",
      "text-align",
      "text-align-last",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-decoration",
      "text-indent",
      "text-justify",
      "text-outline",
      "-ms-text-overflow",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "-webkit-text-size-adjust",
      "-ms-text-size-adjust",
      "letter-spacing",
      "-ms-word-break",
      "word-break",
      "word-spacing",
      "-ms-word-wrap",
      "word-wrap",
      "overflow-wrap",
      "tab-size",
      "white-space",
      "vertical-align",
      "direction",
      "unicode-bidi",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "pointer-events",
      "-ms-touch-action",
      "touch-action",
      "cursor",
      "visibility",
      "zoom",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse",
      "content",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "background",
      "background-color",
      "background-image",
      "filter",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "border",
      "border-color",
      "border-style",
      "border-width",
      "border-top",
      "border-top-color",
      "border-top-style",
      "border-top-width",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",
      "opacity",
      "-ms-interpolation-mode",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "transform",
      "transform-origin",
      "perspective",
      "appearance",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "fill",
      "stroke"
    ],
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": null,
    "scss/dollar-variable-default": [
      true,
      {
        "ignore": "local"
      }
    ],
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never-single-line",
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-combinators": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-empty-lines": 1,
    "selector-max-id": 0,
    "selector-max-specificity": null,
    "selector-max-type": 2,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "string-quotes": "double",
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "never-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-no-vendor-prefix": true,
    "plugin/no-unsupported-browser-features": [true, {
      "ignore": ["flexbox"]
    }]
  }
};

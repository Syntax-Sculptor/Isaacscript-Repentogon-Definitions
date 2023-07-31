/**
 * This ESLint config only contains built-in rules from ESLint itself:
 * https://eslint.org/docs/latest/rules/
 *
 * @type {import("eslint").Linter.Config}
 */
const config = {
  // Activate the "no-autofix" plugin, which allows the fixer for specific core ESLint rules to be
  // turned off:
  // https://github.com/aladdin-add/eslint-plugin/tree/master/packages/no-autofix
  plugins: ["no-autofix"],

  extends: [
    // Contains recommended rules by the official ESLint team:
    // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
    "eslint:recommended",

    // Turns off the ESLint recommended rules that are handled by TypeScript:
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
    // Additionally, this turns on some specific ESLint rules that are not contained within the
    // recommended config (since they work well with TypeScript).
    "plugin:@typescript-eslint/eslint-recommended",
  ],

  // https://eslint.org/docs/latest/rules/
  // - Rules are separated into categories:
  //  - Possible Problems
  //  - Suggestions
  //  - Layout & Formatting
  // - An `[I]` indicates that the rule is inherited from the parent configs.
  // - An `[X]` indicates that the rule is not present in the parent configs and that we explicitly
  //   do not enable it for a particular reason.
  rules: {
    // -----------------
    // Possible Problems
    // -----------------

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/array-callback-return
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. We enable different options than
     * Airbnb in order to make the rule stricter.
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "array-callback-return": [
      "error",
      {
        checkForEach: true,
      },
    ],

    // [X] "constructor-super" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "for-direction" is included in `recommended`.

    // [X] "getter-return" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "no-async-promise-executor" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-await-in-loop
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-await-in-loop": "error",

    // [I] "no-class-assign" is included in `recommended`.

    // [I] "no-compare-neg-zero" is included in `recommended`.

    // [I] "no-cond-assign" is included in `recommended`.

    // [X] "no-const-assign" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-constant-binary-expression
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-constant-binary-expression": "error",

    // [I] "no-constant-condition" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-constructor-return
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-constructor-return": "error",

    // [I] "no-control-regex" is included in `recommended`.

    // [I] "no-debugger" is included in `recommended`.

    // [X] "no-dupe-args" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [X] "no-dupe-class-members" is not enabled since it is superseded by the
    // `@typescript-eslint/no-dupe-class-members` rule.

    // [I] "no-dupe-else-if" is included in `recommended`.

    // [X} "no-dupe-keys" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "no-duplicate-case" is included in `recommended`.

    // [X] "no-duplicate-imports" is not enabled since it is superseded by the
    // `import/no-duplicates` rule (which is provided by the `import/recommended` config).

    // [I] "no-empty-character-class" is included in `recommended`.

    // [I] "no-empty-pattern" is included in `recommended`.

    // [I] "no-ex-assign" is included in `recommended`.

    // [I] "no-fallthrough" is included in `recommended`.

    // [X] "no-func-assign" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [X] "no-import-assign" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "no-inner-declarations" is included in `recommended`.

    // [I] "no-invalid-regexp" is included in `recommended`.

    // [I] "no-irregular-whitespace" is included in `recommended`.

    // [X] "no-loss-of-precision" is not enabled since it is superseded by the
    // `@typescript-eslint/no-loss-of-precision` rule.

    // [I] "no-misleading-character-class" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-new-native-nonconstructor": "error",

    // [X] "no-new-symbol" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [X] "no-obj-calls" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-promise-executor-return
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-promise-executor-return": "error",

    // [I] "no-prototype-builtins" is included in `recommended`.

    // [I] "no-self-assign" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-self-compare
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-self-compare": "error",

    // [X] "no-setter-return" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "no-sparse-arrays" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-template-curly-in-string
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-template-curly-in-string": "error",

    // [X] "no-this-before-super" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [X] "no-undef" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "no-unexpected-multiline" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
     *
     * Not enabled in the parent configs.
     *
     * This prevents bugs in loops.
     */
    "no-unmodified-loop-condition": "error",

    // [X] "no-unreachable" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-unreachable-loop
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb does not specify any
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-unreachable-loop": [
      "error",
      {
        ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
      },
    ],

    // [I] "no-unsafe-finally" is included in `recommended`.

    // [X] "no-unsafe-negation" is not enabled since it is disabled by
    // `@typescript-eslint/eslint-recommended`.

    // [I] "no-unsafe-optional-chaining" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-unused-private-class-members
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    "no-unused-private-class-members": "error",

    // [X] "no-unused-vars" is not enabled since it is superseded by the
    // `@typescript-eslint/no-unused-vars` rule.

    // [X] "no-use-before-define" is not enabled since it is superseded by the
    // `@typescript-eslint/no-use-before-define` rule.

    // [I] "no-useless-backreference" is included in `recommended`.

    // [X] "require-atomic-updates" is not enabled since Airbnb reports that the rule is "very
    // buggy":
    // https://raw.githubusercontent.com/airbnb/javascript/master/packages/eslint-config-airbnb-base/rules/errors.js

    // [I] "use-isnan" is included in `recommended`.

    // [I] "valid-typeof" is included in `recommended`.

    // -----------
    // Suggestions
    // -----------

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/accessor-pairs
     *
     * Not enabled in the parent configs.
     *
     * This rule can find unused code.
     */
    "accessor-pairs": "off",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/arrow-body-style
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb specifies the default
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
     */
    "arrow-body-style": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/block-scoped-var
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "block-scoped-var": "error",

    // [X] "camelcase" is not enabled since it is superseded by the
    // `@typescript-eslint/naming-convention` rule.

    // [X] "capitalized-comments" is not enabled since it is superseded by the
    // `isaacscript/complete-sentences-jsdoc` and `isaacscript/complete-sentences-line-comments`
    // rules.

    // [X] "class-methods-use-this" is not enabled since it is superseded by the
    // `@typescript-eslint/class-methods-use-this` rule.

    // [X] "complexity" is not enabled since cyclomatic complexity is not a good general indicator
    // of code complexity.

    // [X] "consistent-return" is not enabled because this is handled by the `noImplicitReturns`
    // TypeScript compiler flag.

    // [X] "consistent-this" is not enabled since capturing `this` is largely obviated by using
    // modern arrow functions.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/curly
     *
     * Defined at:
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     *
     * Always requiring curly braces can partially ward against Apple-style if statement bugs:
     * https://www.imperialviolet.org/2014/02/22/applebug.html
     *
     * Additionally, this rule needs to be set to "all" to work properly with
     * `eslint-prettier-config`:
     * https://github.com/prettier/eslint-config-prettier#curly
     */
    curly: ["error", "all"],

    // [X] "default-case" is not enabled since it is generally bad to have on in TypeScript
    // projects:
    // https://github.com/typescript-eslint/typescript-eslint/issues/5254#issuecomment-1168992749

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/default-case-last
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "default-case-last": "error",

    // [X] "default-param-last" is not enabled since it is superseded by the
    // `@typescript-eslint/default-param-last` rule.

    // [X] "dot-notation" is not enabled since it is superseded by the
    // `@typescript-eslint/dot-notation` rule.

    // [X] "eqeqeq" is not enabled since it is superseded by the `isaacscript/eqeqeq-fix` rule.

    // [X] "func-name-matching"

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/func-names
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb uses the default
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    "func-names": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/func-style
     *
     * Not enabled in the parent configs.
     *
     * We prefer normal functions over function expressions, since they make code slightly easier to
     * read.
     */
    "func-style": ["error", "declaration"],

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/grouped-accessor-pairs
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb uses the default
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "grouped-accessor-pairs": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/guard-for-in
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "guard-for-in": "error",

    // [X] "id-denylist" is not enabled since it is expected to be configured with project-specific
    // keywords.

    // [X] "id-length" is not enabled because short variable names are understandable in certain
    // contexts.

    // [X] "id-match" is not enabled since it is superseded by the
    // `@typescript-eslint/naming-convention` rule.

    // [X] "init-declarations" is not enabled since it is superseded by the
    // `@typescript-eslint/init-declarations` rule.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/logical-assignment-operators
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (We copy the Airbnb options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    "logical-assignment-operators": [
      "error",
      "always",
      {
        enforceForIfStatements: true,
      },
    ],

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/max-classes-per-file
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb uses the default
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "max-classes-per-file": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/max-depth
     *
     * Not enabled in the parent configs.
     *
     * Many nested blocks makes code difficult to read.
     */
    "max-depth": "error",

    // [X] "max-lines" is not enabled because enforcing an arbitrary line threshold for every file
    // in a project does not provide much value.

    // [X] "max-lines-per-function" is not enabled because enforcing an arbitrary line threshold for
    // every function in a project does not provide much value.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/max-nested-callbacks
     *
     * Not enabled in the parent configs.
     *
     * Many nested callbacks makes code difficult to read.
     */
    "max-nested-callbacks": "error",

    // [X] "max-params" is not enabled because enforcing an arbitrary parameter number threshold for
    // every function in a project does not provide much value. (Additionally, using TypeScript
    // reduces the value of such a check.)

    // [X] "max-statements" is not enabled because enforcing an arbitrary statement threshold for
    // every function in a project does not provide much value.

    // [X] "multiline-comment-style" is not enabled because it is conventional to use both kinds of
    // comments in a TypeScript project.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/new-cap
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (We use the default options,
     * which are safer than the Airbnb options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    "new-cap": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-alert
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-alert": "error",

    // [X] "no-array-constructor" is not enabled since it is superseded by the
    // `@typescript-eslint/no-array-constructor` rule.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-bitwise
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb does not specify any
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    "no-bitwise": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-bitwise
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-caller": "error",

    // [I] "no-case-declarations" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-confusing-arrow
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (We copy the Airbnb options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
     */
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
      },
    ],

    // [X] "no-console" is not enabled because command-line programs commonly write to standard out
    // and standard error.

    // [X] "no-continue" is not enabled because proper use of continues can reduce indentation for
    // long blocks of code.

    // [I] "no-delete-var" is included in `recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-div-regex
     *
     * Not enabled in the parent configs.
     */
    "no-div-regex": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-else-return
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (We copy the Airbnb options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],

    // [I] "no-empty" is included in `recommended`.

    // [X] "no-empty-function" is not enabled since it is superseded by the
    // `@typescript-eslint/no-empty-function` rule.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-else-return
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-empty-static-block": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-eq-null
     *
     * Not enabled in the parent configs.
     *
     * Prevent confusing comparisons to `null`.
     */
    "no-eq-null": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-eval
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (Airbnb uses the default
     * options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-eval": "error",

    // "no-extend-native"

    // "no-extra-bind"

    // [I] "no-extra-boolean-cast" is included in `recommended`.

    // "no-extra-label"

    // [X] "no-extra-semi" is not enabled since it is superseded by the
    // `@typescript-eslint/no-extra-semi` rule.

    // "no-floating-decimal"

    // [I] "no-global-assign" is included in `recommended`.

    // "no-implicit-coercion"

    // "no-implicit-globals"

    // [X] "no-implied-eval" is not enabled since it is superseded by the
    // `@typescript-eslint/no-implied-eval` rule.

    // "no-inline-comments"

    // [X] "no-invalid-this" is not enabled since it is superseded by the
    // `@typescript-eslint/no-invalid-this` rule.

    // "no-iterator"

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-label-var
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
     */
    "no-label-var": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-labels
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. Unlike Airbnb, we use the default
     * options since they are stricter.
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-labels": "error",

    // "no-lone-blocks"

    // "no-lonely-if"

    // [X] "no-loop-func" is not enabled since it is superseded by the
    // `@typescript-eslint/no-loop-func` rule.

    // [X] "no-magic-numbers" is not enabled since it is superseded by the
    // `@typescript-eslint/no-magic-numbers` rule.

    // "no-mixed-operators"

    // "no-multi-assign"

    // "no-multi-str"

    // "no-negated-condition"

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-nested-ternary
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    "no-nested-ternary": "error",

    // "no-new"

    // "no-new-func"

    // "no-new-object"

    // "no-new-wrappers"

    // [I] "no-nonoctal-decimal-escape" is included in `recommended`.

    // [I] "no-octal" is included in `recommended`.

    // "no-octal-escape"

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-param-reassign
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (We copy the Airbnb options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "context", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext", // for ReactRouter context
        ],
      },
    ],

    // [X] "no-plusplus" is not enabled. Unary operators can lead to errors with minified code.
    // However, when using Prettier, it adds semi-colons everywhere, so we don't have to worry about
    // this.

    // "no-proto"

    // [X] "no-redeclare" is not enabled since it is superseded by the
    // `@typescript-eslint/block-spacing` rule.

    // [I] "no-regex-spaces" is included in `recommended`.

    // "no-restricted-exports"

    // "no-restricted-globals"

    // [X] "no-restricted-imports" is not enabled since it is superseded by the
    // `@typescript-eslint/no-restricted-imports` rule.

    // "no-restricted-properties"

    // [X] "no-restricted-syntax" is not enabled because it is intended for disabling of specific
    // language features per-project.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-return-assign
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (We copy the Airbnb options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     */
    "no-return-assign": ["error", "always"],

    // "no-script-url"

    // "no-sequences"

    // [X] "no-shadow" is not enabled since it is superseded by the `@typescript-eslint/no-shadow`
    // rule.

    // [I] "no-shadow-restricted-names" is included in `recommended`.

    // "no-ternary"

    // [X] "no-throw-literal" is not enabled since it is superseded by the
    // `@typescript-eslint/no-throw-literal` rule.

    // "no-undef-init"

    // "no-undefined"

    // [X] "no-underscore-dangle" is not enabled since it is a common pattern to use underscores to
    // temporarily allow unused variables during development.

    // "no-unneeded-ternary"

    // [X] "no-unused-expressions" is not enabled since it is superseded by the
    // `@typescript-eslint/no-unused-expressions` rule.

    // [I] "no-unused-labels" is included in `recommended`.

    // "no-useless-call"

    // [I] "no-useless-catch" is included in `recommended`.

    // "no-useless-computed-key"

    // "no-useless-concat"

    // [X] "no-useless-constructor" is not enabled since it is superseded by the
    // `@typescript-eslint/no-useless-constructor` rule.

    // [I] "no-useless-escape" is included in `recommended`.

    // "no-useless-rename"

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/no-useless-return
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
     *
     * Additionally, we want to disable the autofix for this rule, since it is almost always
     * unwanted.
     */
    "no-useless-return": "off",
    "no-autofix/no-useless-return": "error",

    // [I] "no-var" is included in `@typescript-eslint/eslint-recommended`.

    // "no-void"

    // "no-warning-comments"

    // [I] "no-with" is included in `recommended`.

    // "object-shorthand"

    // "one-var"

    // "one-var-declaration-per-line"

    // "operator-assignment"

    // "prefer-arrow-callback"

    /**
     * Documentation:
     * https://github.com/aladdin-add/eslint-plugin/tree/master/packages/no-autofix
     *
     * Defined at:
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
     *
     * We want to disable the autofix for this rule, since it is almost always unwanted.
     */
    "prefer-const": "off",
    "no-autofix/prefer-const": "error",

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/prefer-destructuring
     *
     * Not defined in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. However, we do not enable array
     * destructuring since it can result in non-intuitive code.
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
     */
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
      {
        // We disable this for renamed properties, this this is a valid use-case.
        // e.g. `const collectibleUsedToShowFlight = CollectibleType.FATE;`
        enforceForRenamedProperties: false,
      },
    ],

    // "prefer-exponentiation-operator"

    // "prefer-named-capture-group"

    // "prefer-numeric-literals"

    // "prefer-object-has-own"

    // "prefer-object-spread"

    // "prefer-promise-reject-errors"

    // "prefer-regex-literals"

    // [I] "prefer-rest-params" is included in `@typescript-eslint/eslint-recommended`.

    // [I] "prefer-spread" is included in `@typescript-eslint/eslint-recommended`.

    /**
     * Documentation:
     * https://eslint.org/docs/latest/rules/prefer-template
     *
     * Not enabled in the parent configs.
     *
     * We follow Airbnb's lead and enable this as a best practice. (There are no options.)
     * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
     */
    "prefer-template": "error",

    // "quote-props"

    // "radix"

    // [X] "require-await" is not enabled since it is superseded by the
    // `@typescript-eslint/require-await` rule.

    // "require-unicode-regexp"

    // [I] "require-yield" is included in `recommended`.

    // "sort-imports"

    // "sort-keys"

    // "sort-vars"

    // "spaced-comment"

    // "strict"

    // "symbol-description"

    // "vars-on-top"

    // "yoda"

    // -------------------
    // Layout & Formatting
    // -------------------

    // "array-bracket-newline"

    // "array-bracket-spacing"

    // "array-element-newline"

    // "arrow-parens"

    // "arrow-spacing"

    // [X] "block-spacing" is not enabled since it is superseded by the
    // `@typescript-eslint/block-spacing` rule.

    // [X] "brace-style" is not enabled since it is superseded by the
    // `@typescript-eslint/brace-style` rule.

    // [X] "comma-dangle" is not enabled since it is superseded by the
    // `@typescript-eslint/comma-dangle` rule.

    // [X] "comma-spacing" is not enabled since it is superseded by the
    // `@typescript-eslint/comma-spacing` rule.

    // "comma-style"

    // "computed-property-spacing"

    // "dot-location"

    // "eol-last"

    // [X] "func-call-spacing" is not enabled since it is superseded by the
    // `@typescript-eslint/func-call-spacing` rule.

    // "function-call-argument-newline"

    // "function-paren-newline"

    // "generator-star-spacing"

    // "implicit-arrow-linebreak"

    // [X] "indent" is not enabled since it is superseded by the `@typescript-eslint/indent` rule.

    // "jsx-quotes"

    // [X] "key-spacing" is not enabled since it is superseded by the
    // `@typescript-eslint/key-spacing` rule.

    // [X] "keyword-spacing" is not enabled since it is superseded by the
    // `@typescript-eslint/keyword-spacing` rule.

    // "line-comment-position"

    // "linebreak-style"

    // [X] "lines-around-comment" is not enabled since it is superseded by the
    // `@typescript-eslint/lines-around-comment` rule.

    // [X] "lines-between-class-members" is not enabled since it is superseded by the
    // `@typescript-eslint/lines-between-class-members` rule.

    // "max-len"

    // "max-statements-per-line"

    // "multiline-ternary"

    // "new-parens"

    // "newline-per-chained-call"

    // [X] "no-extra-parens" is not enabled since it is superseded by the
    // `@typescript-eslint/no-extra-parens` rule.

    // "no-mixed-spaces-and-tabs"

    // "no-multi-spaces"

    // "no-multiple-empty-lines"

    // "no-tabs"

    // "no-trailing-spaces"

    // "no-whitespace-before-property"

    // "nonblock-statement-body-position"

    // "object-curly-newline"

    // [X] "object-curly-spacing" is not enabled since it is superseded by the
    // `@typescript-eslint/object-curly-spacing` rule.

    // "object-property-newline"

    // "operator-linebreak"

    // "padded-blocks"

    // [X] "padding-line-between-statements" is not enabled since it is superseded by the
    // `@typescript-eslint/padding-line-between-statements` rule.

    // [X] "quotes" is not enabled since it is superseded by the `@typescript-eslint/quotes` rule.

    // "rest-spread-spacing"

    // [X] "semi" is not enabled since it is superseded by the `@typescript-eslint/semi` rule.

    // "semi-spacing"

    // "semi-style"

    // [X] "space-before-blocks" is not enabled since it is superseded by the
    // `@typescript-eslint/space-before-blocks` rule.

    // [X] "space-before-function-paren" is not enabled since it is superseded by the
    // `@typescript-eslint/space-before-function-paren` rule.

    // "space-in-parens"

    // [X] "space-infix-ops" is not enabled since it is superseded by the
    // `@typescript-eslint/space-infix-ops` rule.

    // "space-unary-ops"

    // "switch-colon-spacing"

    // "template-curly-spacing"

    // "template-tag-spacing"

    // "unicode-bom"

    // "wrap-iife"

    // "wrap-regex"

    // "yield-star-spacing"
  },
};

module.exports = config;

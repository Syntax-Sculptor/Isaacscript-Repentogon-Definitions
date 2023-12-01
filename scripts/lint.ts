import { $, lintScript } from "isaacscript-common-node";

await lintScript(async () => {
  const promises: Array<Promise<unknown>> = [];

  promises.push(
    // Use Prettier to check formatting.
    // - "--log-level=warn" makes it only output errors.
    $`prettier --log-level=warn --check .`,

    // Type-check the code using the TypeScript compiler.
    $`tsc --noEmit`,

    // Use ESLint to lint the TypeScript.
    // - "--max-warnings 0" makes warnings fail, since we set all ESLint errors to warnings.
    $`eslint --max-warnings 0 scripts *.cjs *.mjs`, // We have to exclude the packages directory.

    // Check for unused files, dependencies, and exports.
    $`knip --exclude dependencies`,
    // (Knip cannot handle Google-style monorepos, so we have to exclude dependencies.)

    // Spell check every file using CSpell.
    // - "--no-progress" and "--no-summary" make it only output errors.
    $`cspell --no-progress --no-summary .`,

    // Check for unused CSpell words.
    $`cspell-check-unused-words`,

    // Check "package.json" files.
    $`npm run package-json-lint`,

    // Check for template updates.
    $`tsx ./packages/isaacscript-cli/src/main.ts check --ignore .eslintrc.cjs,bundleEntry.ts,ci.yml,lint.ts,tsconfig.eslint.json,tsconfig.json`,
  );

  await Promise.all(promises);
});
// Generates the "src/rules.ts" file.

import { getFileNamesInDirectory, writeFile } from "isaacscript-common-node";
import path from "node:path";
import { PACKAGE_ROOT } from "./constants.mjs";
import {
  formatWithPrettier,
  getAutoGeneratedComment,
  getCamelCaseRuleName,
} from "./utils.mjs";

const SRC_DIRECTORY_PATH = path.join(PACKAGE_ROOT, "src");
const RULES_DIRECTORY_PATH = path.join(SRC_DIRECTORY_PATH, "rules");
export const RULES_TS_PATH = path.join(SRC_DIRECTORY_PATH, "rules.ts");

export async function generateRules(): Promise<void> {
  const ruleNames = getRuleNames();
  const comment = getAutoGeneratedComment();
  const code = getRulesCode(ruleNames);
  const combined = comment + code;
  const content = await formatWithPrettier(combined, "typescript");

  writeFile(RULES_TS_PATH, content);
}

function getRuleNames(): readonly string[] {
  const fileNames = getFileNamesInDirectory(RULES_DIRECTORY_PATH);
  const ruleNames = fileNames.map((fileName) => fileName.replace(/\.ts$/, ""));
  ruleNames.sort();

  return ruleNames;
}

function getRulesCode(ruleNames: readonly string[]) {
  let text = "";

  for (const ruleName of ruleNames) {
    const camelCaseRuleName = getCamelCaseRuleName(ruleName);
    text += `import { ${camelCaseRuleName} } from "./rules/${ruleName}";\n`;
  }

  text += "\n";
  text += "export const rules = {\n";

  for (const ruleName of ruleNames) {
    const camelCaseRuleName = getCamelCaseRuleName(ruleName);
    text += `  "${ruleName}": ${camelCaseRuleName},\n`;
  }

  text += "};\n";

  return text;
}

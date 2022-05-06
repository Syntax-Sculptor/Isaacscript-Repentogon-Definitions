import { execSync } from "child_process";
import packageJSON from "../package.json";

generateAll();

export function generateAll() {
  const scripts = Object.keys(packageJSON.scripts);
  const generateScripts = scripts.filter((script) =>
    script.startsWith("generate:"),
  );
  generateScripts.forEach((script) => {
    execSync(`npm run ${script}`);
  });
}

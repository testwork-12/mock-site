import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
	{
		ignores: [
			".angular/*",
			"dist/*",
			"node_modules/*",
			"src/.idea/*",
			"src/assets/*",
			"src/polyfills.ts*",
		]
	}
];

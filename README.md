# Eslint Configuration

Eslint is awesome because it helps you write consistent code within a project by alerting you to error/mistakes within your code that you've asked it to warn you about, and it'll also fix those issues if you have the write set up.

Here's how I have this set up currently:

**Visual Studio Code**

- [Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Package.json dev/peer dependencies**

To see what packages I've installed check out my [package.json](package.json) file!

## How to Install

### With `@eslint/config` Package

You can utilize the `@eslint/config` package to initialize the config. This downloads the dependencies and creates an `.eslintrc.js` file for you with the correct extends block. Run the following command for a speedy setup.

```
npm init @eslint/config -- --config sandricoprovo
```

### Manual Install

If you want to install this configuration in your next project, follow the steps below:

**Step 1:**
Install the dependencies

```javascript
npx install-peerdeps --dev eslint-config-sandricoprovo
```

**Step 2:**
Extend the eslintrc into your own eslintrc file

1. Create a .eslintrc file in your project root
2. Add the following code to your new rc file:

```json
{
  "extends": [
    "sandricoprovo"
  ]
}
```

**TypeScript**
If you want to use this config with TypeScript you can import the TS support using the line below.

```json
{
  "extends": [
    "sandricoprovo/typescript"
  ]
}
```

## If Things Go South

Here is the command you can run on the command line to uninstall everything

``` markdown
npm remove eslint-config-sandricoprovo @babel-core @babel/eslint-parser @babel/preset-react @types/node @typescript-eslint/eslint-plugin @typescript-eslint/eslint-parser eslint-config-airbnb-typescript typescript eslint eslint-config-airbnb eslint-plugin-html eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-import-resolver-typescript
```



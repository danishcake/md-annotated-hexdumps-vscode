// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { extendMarkdownIt } from "marked-annotated-hexdump/markdown-it";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      return extendMarkdownIt(md, {
        strict: false,
      });
    },
  };
}

// This method is called when your extension is deactivated
export function deactivate() {}

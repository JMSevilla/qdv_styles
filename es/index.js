/* eslint-disable import/export */
import { ponyfillGlobal } from '@qodev/utils';
/* Warning if there are several instances of @qodev/styles */

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined') {
  ponyfillGlobal['__@qodev/styles-init__'] = ponyfillGlobal['__@qodev/styles-init__'] || 0;

  if (ponyfillGlobal['__@qodev/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@qodev/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', ''].join('\n'));
  }

  ponyfillGlobal['__@qodev/styles-init__'] += 1;
}

export { default as createGenerateClassName } from './createGenerateClassName';
export * from './createGenerateClassName';
export { default as createStyles } from './createStyles';
export * from './createStyles';
export { default as getThemeProps } from './getThemeProps';
export * from './getThemeProps';
export { default as jssPreset } from './jssPreset';
export * from './jssPreset';
export { default as makeStyles } from './makeStyles';
export * from './makeStyles';
export { default as mergeClasses } from './mergeClasses';
export * from './mergeClasses';
export { default as ServerStyleSheets } from './ServerStyleSheets';
export * from './ServerStyleSheets';
export { default as styled } from './styled';
export * from './styled';
export { default as StylesProvider } from './StylesProvider';
export * from './StylesProvider';
export { default as ThemeProvider } from './ThemeProvider';
export * from './ThemeProvider';
export { default as useTheme } from './useTheme';
export * from './useTheme';
export { default as withStyles } from './withStyles';
export * from './withStyles';
export { default as withTheme } from './withTheme';
export * from './withTheme';
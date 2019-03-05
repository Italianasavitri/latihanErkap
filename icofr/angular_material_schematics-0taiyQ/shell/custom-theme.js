"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Create custom theme for the given application configuration. */
function createCustomTheme(project) {
    const name = project.name || 'app';
    return `
// Custom Theming for Angular Material
// For more information: https://material.angular.io/guide/theming
@import '~@angular/material/theming';
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://www.google.com/design/spec/style/color.html
$${name}-primary: mat-palette($mat-indigo);
$${name}-accent: mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$${name}-warn: mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$${name}-theme: mat-light-theme($${name}-primary, $${name}-accent, $${name}-warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($${name}-theme);

`;
}
exports.createCustomTheme = createCustomTheme;
//# sourceMappingURL=custom-theme.js.map
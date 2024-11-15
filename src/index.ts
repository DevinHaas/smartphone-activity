// Reexport the native module. On web, it will be resolved to SmartphoneActivityModule.web.ts
// and on native platforms to SmartphoneActivityModule.ts
export { default } from './SmartphoneActivityModule';
export { default as SmartphoneActivityView } from './SmartphoneActivityView';
export * from  './SmartphoneActivity.types';

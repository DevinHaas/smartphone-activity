import { NativeModule, requireNativeModule } from 'expo';

import { SmartphoneActivityModuleEvents } from './SmartphoneActivity.types';

declare class SmartphoneActivityModule extends NativeModule<SmartphoneActivityModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SmartphoneActivityModule>('SmartphoneActivity');

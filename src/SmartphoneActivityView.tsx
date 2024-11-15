import { requireNativeView } from 'expo';
import * as React from 'react';

import { SmartphoneActivityViewProps } from './SmartphoneActivity.types';

const NativeView: React.ComponentType<SmartphoneActivityViewProps> =
  requireNativeView('SmartphoneActivity');

export default function SmartphoneActivityView(props: SmartphoneActivityViewProps) {
  return <NativeView {...props} />;
}

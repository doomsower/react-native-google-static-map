import React from 'react';
import {
  ImageProperties,
  ImageStyle,
  ImageURISource,
  LayoutChangeEvent
} from 'react-native';

export type ImageFormat = 'png' | 'png32' | 'gif' | 'jpg' | 'jpg-baseline';

export type MapType = 'roadmap' | 'satellite' | 'terrain' | 'hybrid';

export interface StaticMapProps extends Partial<ImageProperties> {
  latitude: string;
  longitude: string;
  size: {
    width: number;
    height: number;
  },
  zoom: number;
  scale?: 1 | 2;
  format?: ImageFormat;
  mapType?: MapType;
  hasCenterMarker?: boolean;
  apiKey: string;
}

export default class GoogleStaticMap extends React.Component<StaticMapProps, any> {}

export interface LoaderConfiguration {
  bufferValue: number;
  isVisible: boolean;
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  value: number;
}

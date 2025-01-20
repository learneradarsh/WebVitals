import { WebVitalsSDK } from './index';

const sdk = new WebVitalsSDK('https://your-server.com/metrics', {
    enableFID: false,
  });
sdk.init();
import { onLCP, onFID, onCLS } from 'web-vitals';

export class WebVitalsSDK {
    private endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = endpoint;
    }
  
    init() {
      this.trackLCP();
      this.trackFID();
      this.trackCLS();
    }
  
    private sendMetric(name: string, value: number, id: string) {
      const data = { name, value, id, timestamp: Date.now() };
      if (navigator.sendBeacon) {
        navigator.sendBeacon(this.endpoint, JSON.stringify(data));
      } else {
        fetch(this.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
    }
  
    private trackLCP() {
      onLCP((metric) => this.sendMetric('LCP', metric.value, metric.id));
    }
  
    private trackFID() {
      onFID((metric) => this.sendMetric('FID', metric.value, metric.id));
    }
  
    private trackCLS() {
      onCLS((metric) => this.sendMetric('CLS', metric.value, metric.id));
    }
  }
  
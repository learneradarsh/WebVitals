import { onLCP, onFID, onCLS } from 'web-vitals';

interface WebVitalsConfig {
    enableLCP: boolean;
    enableFID: boolean;
    enableCLS: boolean;
}

export class WebVitalsSDK {
    private endpoint: string;
    private config: WebVitalsConfig;
  
    constructor(endpoint: string, config?: Partial<WebVitalsConfig>) {
      this.endpoint = endpoint;
      this.config = {
        enableLCP: true,
        enableFID: true,
        enableCLS: true,
        ...config,
      };
    }
  
    init() {
        if (this.config.enableLCP) this.trackLCP();
        if (this.config.enableFID) this.trackFID();
        if (this.config.enableCLS) this.trackCLS();
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
  
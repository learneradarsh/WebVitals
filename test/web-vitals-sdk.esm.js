import { onLCP, onFID, onCLS } from 'web-vitals';

class WebVitalsSDK {
    constructor(endpoint, config) {
        this.endpoint = endpoint;
        this.config = Object.assign({ enableLCP: true, enableFID: true, enableCLS: true }, config);
    }
    init() {
        if (this.config.enableLCP)
            this.trackLCP();
        if (this.config.enableFID)
            this.trackFID();
        if (this.config.enableCLS)
            this.trackCLS();
    }
    sendMetric(name, value, id) {
        const data = { name, value, id, timestamp: Date.now() };
        if (navigator.sendBeacon) {
            navigator.sendBeacon(this.endpoint, JSON.stringify(data));
        }
        else {
            fetch(this.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
        }
    }
    trackLCP() {
        onLCP((metric) => this.sendMetric('LCP', metric.value, metric.id));
    }
    trackFID() {
        onFID((metric) => this.sendMetric('FID', metric.value, metric.id));
    }
    trackCLS() {
        onCLS((metric) => this.sendMetric('CLS', metric.value, metric.id));
    }
}

export { WebVitalsSDK };

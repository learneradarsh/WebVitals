const { WebVitalsSDK } = require('./web-vitals-sdk.cjs');

test('Web Vitals SDK initializes and collects data', async () => {
    const sdk = new WebVitalsSDK();
    sdk.init();

    const vitals = await sdk.getVitals();
    expect(vitals).toHaveProperty('LCP');
    expect(vitals).toHaveProperty('FCP');
    expect(vitals).toHaveProperty('CLS');
});

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', {minScore: 0.5}],
        'categories:accessibility': ['warn', {minScore: 0.8}],
        'categories:best-practices': ['warn', {minScore: 0.8}],
        'categories:seo': ['warn', {minScore: 0.8}],
        'first-contentful-paint': ['warn', {maxNumericValue: 1700}],
        'largest-contentful-paint': ['warn', {maxNumericValue: 3900}],
        'total-blocking-time': ['warn', {maxNumericValue: 31260}],
        'cumulative-layout-shift': ['warn', {maxNumericValue: 0.1}],
        'speed-index': ['warn', {maxNumericValue: 3700}],
      },
    },
  },
};

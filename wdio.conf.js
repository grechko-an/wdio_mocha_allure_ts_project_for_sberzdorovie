exports.config = {
    runner: 'local',
    sync: true,
    specs: [
        './dist/tests/**/*.spec.js',
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://docdoc.ru',
    waitforTimeout: 15000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['dot', 
    'spec',
    ['allure', {outputDir: 'allure-results', }]
    ],
    mochaOpts: {
        ui: 'bdd',
        require: [
          'tsconfig-paths/register'
        ],
        timeout: 60000
    },
    before: function () {
        browser.maximizeWindow();
        var chai = require('chai');
        chai.Should();
  
        require('ts-node').register({ files: true });
    }
  };
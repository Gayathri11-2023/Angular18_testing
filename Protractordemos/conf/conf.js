// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//testcases//angular_test_spec.js'],
  chromeDriver: require(`chromedriver/lib/chromedriver`).path,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

/*exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['..//testcases//firsttestspec.js']9363573335
};
*/

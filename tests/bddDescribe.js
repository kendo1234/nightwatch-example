describe('Test Scope Name Here', function() {

    test('demo test', function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .setValue('input[type=search]', 'nightwatch')
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    });
  
  });
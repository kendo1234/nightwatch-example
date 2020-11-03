module.exports = {
    'Demo test Ecosia.org': function (browser) {
      browser.url('https://www.ecosia.org/');
  
      // expect element header to be present in 1000ms
      browser.expect.element('header').to.be.present.before(1000);
  
      // expect element header to have css property 'display'
      browser.expect.element('header').to.have.css('display');
  
      // expect element header to have attribute 'class' which contains text 'index-header'
      browser.expect.element('header').to.have.attribute('class').which.contains('index-header');
  
      // expect element .search-form to be an input tag
      browser.expect.element('.search-form').to.be.a('form');
  
      // expect element header to be visible
      browser.expect.element('header').to.be.visible;
  
      browser.end();
    }
  };
describe("Register suite", function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://localhost:51829/login");
        browser.sleep(3000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe("http://localhost:51829/login");
        browser.sleep(5000);
        
    })
    
    it("validate Register", function(){
        let registerherebutton = element(by.css('body > app-root > app-login > section > div > div > div.col-sm-6.text-black > div.d-flex.align-items-center.h-custom-2.px-5.ms-xl-4.mt-5.pt-5.pt-xl-0.mt-xl-n5 > form > p > a'));
        // Find the emailId and password input fields and enter credentials
        let emailId = element(by.css('#form2Example18')); 
        let username = element(by.name('userName')); 
        let password = element(by.css('#form2Example28'));
        let register = element(by.css('body > app-root > app-login > section > div > div > div.col-sm-6.text-black > div.d-flex.align-items-center.h-custom-2.px-5.ms-xl-4.mt-5.pt-5.pt-xl-0.mt-xl-n5 > form > div.pt-1.mb-4 > button'));
        registerherebutton.click();
        browser.sleep(3000);
        emailId.sendKeys('Gayamca11@gmail.com');
        username.sendKeys('Gayathri');
        password.sendKeys('Gayathri_11');
        register.click();
         // Handle the alert box
        browser.switchTo().alert().then(function(alert) {
            // Print the text of the alert
            console.log(alert.getText());
            
            // Accept the alert (click OK)
            alert.accept();
            
        });
        
        browser.sleep(2000);
        
    })
    it("validate successful login", function(){
        let usernamefield = element(by.name("userName"));
        let passwordfield = element(by.name("password"));
        let loginbutton = element(by.css("body > app-root > app-login > section > div > div > div.col-sm-6.text-black > div.d-flex.align-items-center.h-custom-2.px-5.ms-xl-4.mt-5.pt-5.pt-xl-0.mt-xl-n5 > form > div.pt-1.mb-4 > button"));
        usernamefield.sendKeys("Gayathri");
        passwordfield.sendKeys("Gayathri_11");
        loginbutton.click();
        browser.sleep(2000);

    })
    it("validate unsuccessful login", function(){
        let usernamefield = element(by.name("userName"));
        let passwordfield = element(by.name("password"));
        let loginbutton = element(by.css("body > app-root > app-login > section > div > div > div.col-sm-6.text-black > div.d-flex.align-items-center.h-custom-2.px-5.ms-xl-4.mt-5.pt-5.pt-xl-0.mt-xl-n5 > form > div.pt-1.mb-4 > button"));
        usernamefield.sendKeys("Gayathri");
        passwordfield.sendKeys("12345678");
        loginbutton.click();
         // Handle the alert box
         browser.switchTo().alert().then(function(alert) {
            // Print the text of the alert
            console.log(alert.getText());
            
            // Accept the alert (click OK)
            alert.accept();
            
        });
        browser.sleep(2000);
        browser.close();

    })

    
});



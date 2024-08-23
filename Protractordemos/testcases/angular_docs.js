describe("searching Test suite", function(){
    it("validate the searching", function(){
        browser.get("http://localhost:4200/");
        browser.sleep(3000);
        browser.manage().window().maximize();
        // expect(browser.getCurrentUrl()).toBe("http://localhost:4200/");
        // browser.sleep(5000);
        browser.close();


    });

});
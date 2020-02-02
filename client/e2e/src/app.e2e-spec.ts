import { browser, logging, element, by } from 'protractor';

describe('Basic Add test', () => {
  

  it('Aggiunta nuovo item', async () => {
		await browser.get('http://localhost:4200/home');
		await element(by.xpath("//div/button/span")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('New item');
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).element(by.cssContainingText('option', 'Sports & outdoor')).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).sendKeys('http://www.google.com');
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).sendKeys('A descirption');
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-106]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-106]")).sendKeys('http://www.amazon.it');
		await element(by.xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/button/span")).click();
	});


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});


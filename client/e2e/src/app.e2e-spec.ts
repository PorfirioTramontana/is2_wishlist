import { browser, logging, element, by } from 'protractor';

describe('Basic Add test', () => {
  
	// it('Should log in', async () => {
	// 	await browser.get('http://localhost:4200/login');
	// 	await element(by.xpath("//div/div[3]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-209]//*[@x-test-hook-216]")).sendKeys('w0nd3rby@gmail.com');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-209]//*[@x-test-hook-219]")).sendKeys('testme');
	// 	await element(by.css("button[name='submit'] > span.mat-button-wrapper")).click();
	// });

  it('Add new Item', async () => {
		await browser.get('http://localhost:4200/home');

		await element(by.xpath("//button[@id='add_new_item_btn']/span")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('An item');
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).element(by.cssContainingText('option', 'Household appliances')).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).sendKeys('https://images-na.ssl-images-amazon.com/images/I/41uJJ6ivY9L._AC_SY480_.jpg');
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await browser.actions().doubleClick(element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]"))).perform();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await browser.actions().doubleClick(element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]"))).perform();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('Macchina per il pane');
		await element(by.xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[5]/mat-form-field/div/div/div[3]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-106]")).sendKeys('https://www.amazon.it/Moulinex-OW210130-Macchina-Programmi-Automatici/dp/B01CHVXNXA?smid=A11IL2PNWYJU7H&pf_rd_p=34030c08-4fc7-42ca-8b10-bc178969977c&pf_rd_r=JN7MQ7FHKAFXYS4WEW1M');
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).click();
		await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).sendKeys('Una macchina per il pane');
		await element(by.xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/button/span")).click();
	

	});

	// it('Delete Item', async () => {

	// 	await browser.get('http://localhost:4200/home');

	// 	await element(by.xpath("//div/button/span")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('Air Pods');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).element(by.cssContainingText('option', 'Electronics')).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).sendKeys('data:image/jpeg;base64,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');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).sendKeys('Air Pods by Apple');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-106]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-106]")).sendKeys('apple.it');
	// 	await element(by.xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/button/span")).click();
	// 	await element(by.xpath("//div[5]/mat-card/div/button/span")).click();
	// 	await element(by.xpath("//button[3]/span")).click();
	// 	await element(by.xpath("//mat-dialog-container[@id='mat-dialog-0']/app-confirm-dialog/div[2]/button[2]/span")).click();
	// })


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});




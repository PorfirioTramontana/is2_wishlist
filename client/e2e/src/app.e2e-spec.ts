import { browser, logging, element, by } from 'protractor';

describe('Basic Add test', () => {
  
	it('Should log in', async () => {
	 	await browser.get('http://localhost:4200/login');
	});

  // it('Add new Item', async () => {
	// 	await browser.get('http://localhost:4200/home');

	// 	await element(by.xpath("//button[@id='add_new_item_btn']/span")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('An item');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).element(by.cssContainingText('option', 'Household appliances')).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).sendKeys('https://images-na.ssl-images-amazon.com/images/I/41uJJ6ivY9L._AC_SY480_.jpg');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await browser.actions().doubleClick(element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]"))).perform();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await browser.actions().doubleClick(element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]"))).perform();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('Macchina per il pane');
	// 	await element(by.xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[5]/mat-form-field/div/div/div[3]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-106]")).sendKeys('https://www.amazon.it/Moulinex-OW210130-Macchina-Programmi-Automatici/dp/B01CHVXNXA?smid=A11IL2PNWYJU7H&pf_rd_p=34030c08-4fc7-42ca-8b10-bc178969977c&pf_rd_r=JN7MQ7FHKAFXYS4WEW1M');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-tpl-83]//*[@x-test-hook-102]")).sendKeys('Una macchina per il pane');
	// 	await element(by.xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/button/span")).click();
	

	// });

	// it('Delete Item', async () => {

	// 	await browser.get('http://localhost:4200/home');

	// 	await element(by.xpath("//div/button/span")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]")).sendKeys('Air Pods');
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).element(by.cssContainingText('option', 'Electronics')).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).click();
	// 	await element(by.xpath("//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]")).sendKeys('https://www.tigershop.it/wp-content/uploads/2017/10/cuffie.jpg');
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




# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options

from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class DeleteItem(unittest.TestCase):
    def setUp(self):
        chrome_options = Options()  
        #chrome_options.add_argument("--headless")  
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.implicitly_wait(30)
        self.driver.set_window_position(0, 0)
        self.driver.set_window_size(1920, 1080)
        self.base_url = "http://www.google.com/"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_delete_item(self):
        driver = self.driver
        driver.get("http://localhost:4200/home")
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-32]").click()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-32]").clear()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-32]").send_keys("Air Pods")
        driver.find_element_by_xpath("//mat-select[@id='mat-select-0']/div/div[2]").click()
        driver.find_element_by_xpath("//mat-option[@id='mat-option-0']/span").click()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-44]").click()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-44]").clear()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-44]").send_keys("https://www.tigershop.it/wp-content/uploads/2017/10/cuffie.jpg")
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-49]").click()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-49]").clear()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-49]").send_keys("Air Pods by Apple")
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-54]").click()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-54]").clear()
        driver.find_element_by_css_selector("[x-test-tpl-70] [x-test-hook-80] [x-test-tpl-11] [x-test-hook-84]:nth-of-type(5) [x-test-hook-54]").send_keys("apple.it")
        driver.find_element_by_xpath("//div[5]/mat-card/mat-card-actions/button/span").click()
        driver.find_element_by_xpath("//div[5]/mat-card/mat-card-actions/button/span").click()
        driver.find_element_by_xpath("//button[3]/span").click()
        driver.find_element_by_xpath("//mat-dialog-container[@id='mat-dialog-0']/app-confirm-dialog/div[2]/button[2]/span").click()
		
	def test_delete_abort1(self):
        driver = self.driver
        driver.get("http://localhost:4200/home")
        driver.find_element_by_xpath("//div[4]/mat-card/mat-card-actions/button/span").click()
        driver.find_element_by_xpath("//button[2]/span").click()
		
	 def test_delete_abort2(self):
        driver = self.driver
        driver.get("http://localhost:4200/home")
        driver.find_element_by_xpath("//div[4]/mat-card/mat-card-actions/button/span").click()
        driver.find_element_by_xpath("//button[3]/span").click()
        driver.find_element_by_xpath("//mat-dialog-container[@id='mat-dialog-0']/app-confirm-dialog/div[2]/button/span").click()
        driver.find_element_by_xpath("//button[2]/span").click()
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main(verbosity=2)

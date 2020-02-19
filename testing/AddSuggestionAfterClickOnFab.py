
# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options  

from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class AddSuggestionAfterClickOnFab(unittest.TestCase):
    def setUp(self):
        chrome_options = Options()  
        #chrome_options.add_argument("--headless")  
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.implicitly_wait(30)
        self.driver.set_window_position(0, 0)
        self.driver.set_window_size(1920, 1280)
        self.base_url = "http://www.google.com/"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_case(self):
        driver = self.driver
        driver.get("http://localhost:4200/")
        driver.find_element_by_xpath("//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-259]").click()
        time.sleep(1)
        driver.find_element_by_xpath("//mat-card-actions/button/span").click()
        time.sleep(1)
        driver.find_element_by_xpath("//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-9][1]//*[@x-test-hook-110]").click()
        time.sleep(1)
        driver.find_element_by_xpath("//button[3]/span").click()
        time.sleep(1)
        driver.find_element_by_xpath("//mat-dialog-container[@id='mat-dialog-0']/app-confirm-dialog/div[2]/button[2]/span").click()
        time.sleep(1)
        driver.find_element_by_xpath("//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-259]").click()

    def test_case_css(self):
        driver = self.driver
        driver.get("http://localhost:4200/")
        driver.find_element_by_css_selector("#show_suggestions > span.mat-button-wrapper > mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color").click()
        driver.find_element_by_css_selector("button.mat-stroked-button.mat-button-base.mat-accent.cdk-focused.cdk-mouse-focused").click()
        driver.find_element_by_css_selector("button.mat-stroked-button.mat-button-base.cdk-focused.cdk-mouse-focused").click()
        driver.find_element_by_css_selector("button.mat-stroked-button.mat-button-base.mat-warn.cdk-focused.cdk-mouse-focused").click()
        driver.find_element_by_css_selector("button.mat-raised-button.mat-button-base.mat-primary.cdk-focused.cdk-mouse-focused").click()

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

# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class SignupOK(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.implicitly_wait(30)
        self.base_url = "https://www.google.com/"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_signup_o_k(self):
        driver = self.driver
        driver.get("http://localhost:4200/signup")
        driver.find_element_by_id("mat-input-2").click()
        driver.find_element_by_id("mat-input-2").clear()
        driver.find_element_by_id("mat-input-2").send_keys("me@antonio.engineer")
        driver.find_element_by_id("mat-input-3").clear()
        driver.find_element_by_id("mat-input-3").send_keys("testme")
        driver.find_element_by_xpath("//form/button/span").click()
        driver.find_element_by_xpath("//mat-icon").click()
		
	
    def test_signup_k_o_duplication_error(self):
        driver = self.driver
        driver.get("http://localhost:4200/signup")
        driver.find_element_by_id("mat-input-0").click()
        driver.find_element_by_id("mat-input-0").clear()
        driver.find_element_by_id("mat-input-0").send_keys("w0nd3rby@gmail.com")
        driver.find_element_by_id("mat-input-1").clear()
        driver.find_element_by_id("mat-input-1").send_keys("testme")
        driver.find_element_by_xpath("//form/button/span").click()
		
	
    def test_signup_k_o_bad_email(self):
        driver = self.driver
        driver.get("http://localhost:4200/signup")
        driver.find_element_by_id("mat-input-0").click()
        driver.find_element_by_id("mat-input-0").clear()
        driver.find_element_by_id("mat-input-0").send_keys("me@antonioengineer")
        driver.find_element_by_id("mat-input-1").clear()
        driver.find_element_by_id("mat-input-1").send_keys("testme")
        driver.find_element_by_xpath("//form/button/span").click()
		
	
    def test_signup_abort(self):
        driver = self.driver
        driver.get("http://localhost:4200/login")
        driver.find_element_by_link_text("Sign up").click()
        driver.find_element_by_link_text("login").click()
    
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
    unittest.main()

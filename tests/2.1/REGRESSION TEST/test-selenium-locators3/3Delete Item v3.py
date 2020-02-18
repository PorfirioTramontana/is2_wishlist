# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class DeleteItem(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.implicitly_wait(30)
        self.base_url = "https://www.google.com/"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_delete_item(self):
        driver = self.driver
        driver.get("http://localhost:4200/home")
        driver.find_element_by_xpath("//div/button/span").click()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div/mat-form-field/div/div/div[3]/input").click()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div/mat-form-field/div/div/div[3]/input").clear()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div/mat-form-field/div/div/div[3]/input").send_keys("Air Pods")
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[2]/mat-form-field/div/div/div[3]/select").click()
        Select(driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[2]/mat-form-field/div/div/div[3]/select")).select_by_visible_text("Electronics")
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[2]/mat-form-field/div/div/div[3]/select").click()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[3]/mat-form-field/div/div/div[3]/input").click()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[3]/mat-form-field/div/div/div[3]/input").clear()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[3]/mat-form-field/div/div/div[3]/input").send_keys("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AfAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EADUQAAICAQEFBQUIAgMAAAAAAAABAgMEERIhMUFxBRMyUYEUIjRh0TNSVGJykZLBI0MkseH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APuIAAAVlLTdzLC6k9Za/eYGmrfMpNTUW698tHom9NRXB7Uwc+y+GFlVXSx593coPXYl5MbUtWawc7sHtyvtaF0HVPHysebryMex6yrl6cV5PmdcS9jxo5csyFNccqUFCVyjpKUVwTfkOReqTM0Enspt8jj9l9tLtfMy68SqXsmNLu3k6+7OxcYxXPTm+B074xsXdyWsWveT5meJjY+FjQx8SmuiitaQrrjooroUapacG/3LKT5lNoUwe1MLtDv/AGHKqv7ix127EtdiS5MuDoJ68CTKl67f6v6RqZAAAAAAAAldLYskvnqOmN9Ebl5S8wOPh4WB2dPJngYlOPLJsdt7rho7Jvi38xqGQttLXezLIx8ir/W5rzjvOdKntHItisWmUGn4prRL9zQ70ptaM3x7YW17Vc4zjtNap809Gv31Fb91UW/IYxZbVa6Eoztug7JQjNOcWtpJ715FbrdiCZS+Wt8ULds4+ZbXX7Ek1HfOOu9r5FGivT5mHZ+Dg9nd/wCwYtOP7RY7be7jptzfFsXx1kvSMseza+cWdTGw5t7V3ur7qZA1jeBvzepsQkktEtESQAAAAAAAAAAAAACGX9jHoa4O+pdDLL+wj0NOz/sV0LQta/8AlLojoV+J/pX9nOs+L9EdGvxP9K/stF9CQAyAAAAAAAAAAAxsu2XsxW1PyRa6exVKXkjjZvaE8R7FME7XvlKXIDqaWy3ys2flEynZVDxZLXSSODLOvt+1k3/0XrntbjWDs5Pw8egYq2qY+81p5MjI+Gh+kMV6UoDKfxS6IZunCM495Y4e7u0FpfFvoivar0lW/wAoDsVtLWu+TXyaZZWW1+PScfNHnJXuL1jufyNKu1sqE0mlOPlIYPTQmpxTiywjh3xnszitIzWuj5MeMgAAAAAAF8z7LX5nFyq9q+za8zv3R263HTU5dtasTjL3Zx5+ZYOTbVsPTV6eehpjx1e4vfVOHFarzRSm1RkVHYyPhodDOqWlMPUUWdZPG2bsaXexbS7qUXGS5PVtNbuQvhZeXZGccrHrohF6VpT2pS829Ny6BXRfxfog7TWrj+k52Jm5c75vOw1DZeilRZGSklwe9prdy0Nrsy26yx2VqFa0Vfvaya5t8lvASlFbX/hvXQklKXPkUT25aRjqO0Y78Vskl5II3wE4xgvzP+jriOLDas2ktIxWiHiVQAAQAAAGVs3FxS5lJUwn70t714lr/FD1LLwvqAlOEfuoxlRjt6uuGvQYmYviaFVVQlooRXoR3NH3I/sWAIhVULhBfsR3GO3vri/QsAFo11R3V1xS6DFdMJ66xRhAao5hUv8AwxexwXIYF7/BIYMgAAAAAAMb/FAsvD6lb/FDqWj4fUoUmYy4m0+JjLiUQQABEgQSBeI1RzFYjVHMKnI8MhgXv8EhgyAAAAAAAxv8UOrJi/d9SL/FDqTHwvqUKzMZcTawwZRAAAQEkABpEao5isRqnmFF/hkMi1/B9RkyAAAAAAAxyOMOpMfD6kZO5QflIiL91lgWmYvia2PeYN7yoAK6hqBYkpqSmBrAbo4sSgxzHfEKm/g+oyK2b2l5yGiUAABAAAAVtht1yj5oS7xxbhLdJbmmPmGTjQvW9uMlwkuIHPsnvMXM0uwM2L/xuuxddGKyx81PR47/AJx+ppGjkG2Ydxm/h3/OP1DuM38O/wCcfqBvtk7Yv3Gb+Hf84/UlUZv4eX84/UBqExqu3RCNeLny/wBCXzlNf0PY/Z8008ixP8sPqQbYydk9tr3Y8PmxsiKUUklokSRQAAB//9k=")
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[4]/mat-form-field/div/div/div[3]/input").click()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[4]/mat-form-field/div/div/div[3]/input").clear()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[4]/mat-form-field/div/div/div[3]/input").send_keys("Air Pods by Apple")
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[5]/mat-form-field/div/div/div[3]/input").click()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[5]/mat-form-field/div/div/div[3]/input").clear()
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/div[5]/mat-form-field/div/div/div[3]/input").send_keys("apple.it")
        driver.find_element_by_xpath("//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/button/span").click()
        driver.find_element_by_xpath("//div[5]/mat-card/div/button/span").click()
        driver.find_element_by_xpath("//button[3]/span").click()
        driver.find_element_by_xpath("//mat-dialog-container[@id='mat-dialog-0']/app-confirm-dialog/div[2]/button[2]/span").click()
		
	
    def test_delete_abort1(self):
        driver = self.driver
        driver.get("http://localhost:4200/home")
        driver.find_element_by_xpath("//div[4]/mat-card/div/button/span").click()
        driver.find_element_by_xpath("//button[2]/span").click()
		
	
    def test_delete_abort2(self):
        driver = self.driver
        driver.get("http://localhost:4200/home")
        driver.find_element_by_xpath("//div[4]/mat-card/div/button/span").click()
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
    unittest.main()

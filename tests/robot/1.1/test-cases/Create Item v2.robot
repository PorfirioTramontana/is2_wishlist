*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${BROWSER}   chrome
${SELSPEED}  0.0s

*** Test Cases ***
Create Item
    [Setup]  Run Keywords  Open Browser  http://localhost:4200/home  ${BROWSER}
    ...              AND   Set Selenium Speed  ${SELSPEED}
    # open    http://localhost:4200/home
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-32]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-32]    Air Pods
    click    xpath=//mat-select[@id='mat-select-0']/div/div[2]
    click    xpath=//mat-option[@id='mat-option-0']/span
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-44]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-44]    https://www.tigershop.it/wp-content/uploads/2017/10/cuffie.jpg
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-49]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-49]    Air Pods by Apple
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-54]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-80]//*[@x-test-tpl-11]//*[@x-test-hook-84][5]//*[@x-test-hook-54]    apple.it
    click    xpath=//div[5]/mat-card/mat-card-actions/button/span
    click    xpath=//div[5]/mat-card/mat-card-actions/button/span
    click    xpath=//button[3]/span
    click    xpath=//mat-dialog-container[@id='mat-dialog-0']/app-confirm-dialog/div[2]/button[2]/span
    [Teardown]  Close Browser

*** Keywords ***
open
    [Arguments]    ${element}
    Go To          ${element}

clickAndWait
    [Arguments]    ${element}
    Click Element  ${element}

click
    [Arguments]    ${element}
    Click Element  ${element}

sendKeys
    [Arguments]    ${element}    ${value}
    Press Keys     ${element}    ${value}

submit
    [Arguments]    ${element}
    Submit Form    ${element}

type
    [Arguments]    ${element}    ${value}
    Input Text     ${element}    ${value}

selectAndWait
    [Arguments]        ${element}  ${value}
    Select From List   ${element}  ${value}

select
    [Arguments]        ${element}  ${value}
    Select From List   ${element}  ${value}

verifyValue
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

verifyText
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

verifyElementPresent
    [Arguments]                  ${element}
    Page Should Contain Element  ${element}

verifyVisible
    [Arguments]                  ${element}
    Page Should Contain Element  ${element}

verifyTitle
    [Arguments]                  ${title}
    Title Should Be              ${title}

verifyTable
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

assertConfirmation
    [Arguments]                  ${value}
    Alert Should Be Present      ${value}

assertText
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

assertValue
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

assertElementPresent
    [Arguments]                  ${element}
    Page Should Contain Element  ${element}

assertVisible
    [Arguments]                  ${element}
    Page Should Contain Element  ${element}

assertTitle
    [Arguments]                  ${title}
    Title Should Be              ${title}

assertTable
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

waitForText
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

waitForValue
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

waitForElementPresent
    [Arguments]                  ${element}
    Page Should Contain Element  ${element}

waitForVisible
    [Arguments]                  ${element}
    Page Should Contain Element  ${element}

waitForTitle
    [Arguments]                  ${title}
    Title Should Be              ${title}

waitForTable
    [Arguments]                  ${element}  ${value}
    Element Should Contain       ${element}  ${value}

doubleClick
    [Arguments]           ${element}
    Double Click Element  ${element}

doubleClickAndWait
    [Arguments]           ${element}
    Double Click Element  ${element}

goBack
    Go Back

goBackAndWait
    Go Back

runScript
    [Arguments]         ${code}
    Execute Javascript  ${code}

runScriptAndWait
    [Arguments]         ${code}
    Execute Javascript  ${code}

setSpeed
    [Arguments]           ${value}
    Set Selenium Timeout  ${value}

setSpeedAndWait
    [Arguments]           ${value}
    Set Selenium Timeout  ${value}

verifyAlert
    [Arguments]              ${value}
    Alert Should Be Present  ${value}

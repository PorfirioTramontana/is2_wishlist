*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${BROWSER}   chrome
${SELSPEED}  0.0s

*** Test Cases ***
Delete Item
    [Setup]  Run Keywords  Open Browser  http://localhost:4200/home  ${BROWSER}
    ...              AND   Set Selenium Speed  ${SELSPEED}
    # open    http://localhost:4200/home
    click    xpath=//div/button/span
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]    Air Pods
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]
    select    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]    Electronics
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]    https://www.tigershop.it/wp-content/uploads/2017/10/cuffie.jpg
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-102]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-102]    Air Pods by Apple
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-106]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-106]    apple.it
    click    xpath=//div[@id='cdk-overlay-0']/mat-bottom-sheet-container/addnewitem-bottom-sheet/div/form/button/span
    click    xpath=//div[5]/mat-card/div/button/span
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

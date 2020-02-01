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
    click    xpath=//div/button/span
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-89]    Air Pods
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]
    select    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]    Electronics
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-93]
    click    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]
    type    xpath=//*[@x-test-tpl-70]//*[@x-test-hook-79]//*[@x-test-tpl-83]//*[@x-test-hook-98]    data:image/jpeg;base64,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
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

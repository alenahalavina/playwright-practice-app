import {test} from '@playwright/test'

test.beforeAll(() => {

})

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click() 
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rule', async({page}) => {
    //by Tag name
    await page.locator('input').first().click()

     //by ID
     page.locator('#inputEmail1')

     //by Class value
     page.locator('.shape-rectangle nb-transition')

     //by HTML attribute
     page.locator('[placeholder="Email"]')

     // by Class value (full)
     page.locator('input-full-width size-medium status-basic shape-rectangle nb-transition')

     //combine different selectors
     page.locator('input[placeholder="Email"][nbinput]')

     //by XPath (NOT RECOMMENTED)
     // * (Wildcard Selector) It tells XPath to find any tag (div, input, span, etc.) that has id="inputEmail1"
     // The @ symbol is used to select attributes in XPath. Find find any tag where id="#inputEmail1".
     // '//' Start from anywhere in the document instead of from the root.
     page.locator('//*[@id=inputEmail1]') 

     // by partial text match
     page.locator(':text("Using")')

     // by exact text match
     page.locator(':test-is("Using the Grid")')
})



   



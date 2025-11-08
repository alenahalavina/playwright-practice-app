import {test, expect} from '@playwright/test'

test.beforeEach(async({page}, testInfo) => {
    await page.goto('http://localhost:4200/')
})

test.describe('Forms Layouts page', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click() 
        await page.getByText('Form Layouts').click()
    })

    test('inout fields', async({page}) => {
        const usingTheGridEmailInut = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', { name: "Email" })

        await usingTheGridEmailInut.fill('test@test.com')
    })

})
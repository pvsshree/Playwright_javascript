const{test,expect } = require('@playwright/test')
const { log } = require('node:console')

test("Verify Error Msg", async function ({page}) 
{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin")
    await page.getByPlaceholder("Password").type("xyz")
    await page.locator("//button[@type='submit']").click()

    const errorMessage = await page.locator("//p[text()='Invalid credentials']").textContent()
    console.log(errorMessage)
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage==="Invalid credentials").toBeTruthy()
})
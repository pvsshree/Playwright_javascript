const{test,expect} = require('@playwright/test')

test("registernewuser" , async function ({page})
 {
    
await page.goto("https://freelance-learn-automation.vercel.app/signup")
await page.locator("#state").selectOption({label:"Goa"})
await page.waitForTimeout(3000)
await page.locator("#state").selectOption({value:"Assam"})
await page.waitForTimeout(3000)
const value = await page.locator("#state").textContent()
console.log(value)

await expect(value.includes("Manipur")).toBeTruthy


})
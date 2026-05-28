const{test,expect} = require('@playwright/test')

test("registernewuser" , async function ({page})
 {
    
await page.goto("https://freelance-learn-automation.vercel.app/signup")
await page.locator("#state").selectOption({label:"Goa"})
await page.waitForTimeout(3000)
await page.locator("#state").selectOption({value:"Assam"})
await page.waitForTimeout(3000)
//const value = await page.locator("#state").textContent()
//console.log(value)

//await expect(value.includes("Manipur")).toBeTruthy


const state = await page.$('#state')
const allElements = await state.$$('option')
//For Assertion to check state is present or not
const ddStatus = false

//To get all Elements
for(let i=0 ; i<allElements.length ; i++)
{
const element = await allElements[i]
const value = await element.textContent()
console.log(value);

}



await page.locator('#hobbies').selectOption(['Playing','Swimming'])
await page.waitForTimeout(3000)


})
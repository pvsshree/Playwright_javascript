const{test,expect} = require('@playwright/test')

test.use({viewportSize:{width:1200,height:800}})
test("OrangeHRMLogin" , async function ({page}) 
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.getByPlaceholder("Username").type("Admin",{delay:200}  )
    await page.getByPlaceholder("Password").type("admin123", {delay:100})
    await page.locator("//button[@type='submit']").click()

    //await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
   // await page.waitForTimeout(3000)

    await expect(page).toHaveURL(/login/)
})
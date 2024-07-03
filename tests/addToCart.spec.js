// @ts-check
const { test, expect } = require('@playwright/test');

test('User added item to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);

   // Login
  await page.locator('//input[@id="user-name"]').fill('standard_user');
  await page.locator('//input[@id="password"]').fill('secret_sauce');
  await page.locator('//input[@id="login-button"]').click();

  await page.waitForTimeout(10000);
  await expect(page).toHaveURL(/.*inventory.html/);

  // Sort items
 await page.locator('//select[@class="product_sort_container"]').selectOption('lohi');

 //await page.waitForTimeout(10000);

 // Ensure item is visible
 await expect(page.getByAltText('Sauce Labs Onesie')).toBeVisible();

  // Get item name
 const itemName = await page.locator('//div[normalize-space()="Sauce Labs Onesie"]').textContent();
 if (!itemName) {
    throw new Error('Item name is null');
  }
 console.log(itemName);

 await expect(page.locator('//a[@class="shopping_cart_link"]')).toBeVisible();
 
 // Add item to cart
 await page.locator('//button[@id="add-to-cart-sauce-labs-onesie"]').click();
 await page.locator('//a[@class="shopping_cart_link"]').click();

 await expect(page).toHaveURL(/.*cart.html/);

 // Validate item in cart
 const cartItemName = await page.locator('//div[@class="inventory_item_name"]').textContent();
  if (cartItemName) {
    console.log(cartItemName);
    await expect(cartItemName.trim()).toBe(itemName.trim());
  } else {
    throw new Error('Cart item name is null');
  }
  
 // Validate remove button contains item name
 await expect(page.locator('//button[@id="remove-sauce-labs-onesie"]')).toBeVisible();

 //log off
 await page.locator('//button[@id="react-burger-menu-btn"]').click();
 //await page.waitForTimeout(5000);
 await page.locator('//a[@id="logout_sidebar_link"]').click();
 await expect(page).toHaveURL('https://www.saucedemo.com/');

});


test('User removed item to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
  
     // Login
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
  
    await page.waitForTimeout(10000);
    await expect(page).toHaveURL(/.*inventory.html/);
  
    // Sort items
   await page.locator('//select[@class="product_sort_container"]').selectOption('hilo');
  
   //await page.waitForTimeout(10000);
  
   // Ensure item is visible
   await expect(page.getByAltText('Sauce Labs Fleece Jacket')).toBeVisible();
    // Add item to cart
    await page.locator('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
  
  
   await expect(page.locator('//a[@class="shopping_cart_link"]')).toBeVisible();
   await page.locator('//a[@class="shopping_cart_link"]').click();
  
   await expect(page).toHaveURL(/.*cart.html/);

   //Validate item added sucecssfully to the cart
   await expect(page.locator('//div[@class="cart_item"]')).toHaveCount(1);
      
   // Validate remove button contains item name
   await expect(page.locator('//button[@id="remove-sauce-labs-fleece-jacket"]')).toBeVisible();
   await page.locator('//button[@id="remove-sauce-labs-fleece-jacket"]').click();

   //log off
 await page.locator('//button[@id="react-burger-menu-btn"]').click();
 await page.locator('//a[@id="logout_sidebar_link"]').click();
 await expect(page).toHaveURL('https://www.saucedemo.com/');

});


test('Item ordered successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
  
     // Login
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
  
    await page.waitForTimeout(10000);
    await expect(page).toHaveURL(/.*inventory.html/);
  
    // Sort items
   await page.locator('//select[@class="product_sort_container"]').selectOption('lohi');
  
   //await page.waitForTimeout(10000);
  
   // Ensure item is visible
   await expect(page.getByAltText('Sauce Labs Onesie')).toBeVisible();
  
   await expect(page.locator('//a[@class="shopping_cart_link"]')).toBeVisible();
   
   // Add item to cart
   await page.locator('//button[@id="add-to-cart-sauce-labs-onesie"]').click();
   await page.locator('//a[@class="shopping_cart_link"]').click();
  
   await expect(page).toHaveURL(/.*cart.html/);
  
   // Validate remove button contains item name
   await expect(page.locator('//button[@id="checkout"]')).toBeVisible();
   await page.locator('//button[@id="checkout"]').click();
   await expect(page).toHaveURL(/.*checkout-step-one.html/);

   //filling up details
   await page.locator('//input[@id="first-name"]').fill('Riddhika');
    await page.locator('//input[@id="last-name"]').fill('Chatterjee');
    await page.locator('//input[@id="postal-code"]').fill('2582 HR');

    //continuing the order
    await expect(page.locator('//input[@id="continue"]')).toBeVisible();
    await page.locator('//input[@id="continue"]').click();
    await expect(page).toHaveURL(/.*checkout-step-two.html/);

    //completing the order process
    await expect(page.locator('//button[@id="finish"]')).toBeVisible();
    await page.locator('//button[@id="finish"]').click();
    await expect(page).toHaveURL(/.*checkout-complete.html/);
  
   await expect(page.locator('//div[@class="complete-text"]')).toBeVisible();
   await page.locator('//button[@id="back-to-products"]').click();

   //log off
 await page.locator('//button[@id="react-burger-menu-btn"]').click();
 await page.locator('//a[@id="logout_sidebar_link"]').click();
 await expect(page).toHaveURL('https://www.saucedemo.com/');
  
  });
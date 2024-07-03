// @ts-check
import { test, expect } from "@playwright/test";

import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";

test.beforeEach(async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/.*inventory.html/);
});

test("Item added to cart successfully", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  //Home
  const home = new HomePage(page);

  await expect(page.locator(home.sort)).toBeVisible();
  await home.sortItems();
  const addToCartBtn = home.addToCartBtnIcon("Sauce Labs Onesie");
  await expect(page.locator(addToCartBtn)).toBeVisible();
  await home.addProductToCart("Sauce Labs Onesie");
  await expect(page.locator(home.cartIcon)).toBeVisible();
  await home.gotoCart();
  await expect(page).toHaveURL(/.*cart.html/);
  await home.logOff();
  await expect(page).toHaveURL(login.url);
});

test("Item removed from cart successfully", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  //Home
  const home = new HomePage(page);

  const cart = new CartPage(page);

  await expect(page.locator(home.sort)).toBeVisible();
  const addToCartBtn = home.addToCartBtnIcon("Sauce Labs Backpack");
  await expect(page.locator(addToCartBtn)).toBeVisible();
  await home.addProductToCart("Sauce Labs Backpack");
  await expect(page.locator(home.cartIcon)).toBeVisible();
  await home.gotoCart();
  await expect(page).toHaveURL(/.*cart.html/);
  await cart.removeProductFromCart("Sauce Labs Backpack");
  const verifydeletedProduct = cart.verifyRemovedProductFromCart(
    "Sauce Labs Backpack"
  );
  await expect(page.locator(verifydeletedProduct)).not.toBeVisible();
  await home.logOff();
  await expect(page).toHaveURL(login.url);
});

test("Item successfully ordered", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  //Home
  const home = new HomePage(page);

  const cart = new CartPage(page);

  await expect(page.locator(home.sort)).toBeVisible();
  const addToCartBtn = home.addToCartBtnIcon("Sauce Labs Backpack");
  await expect(page.locator(addToCartBtn)).toBeVisible();
  await home.addProductToCart("Sauce Labs Backpack");
  await expect(page.locator(home.cartIcon)).toBeVisible();
  await home.gotoCart();
  await expect(page).toHaveURL(/.*cart.html/);
  await expect(page.locator(cart.checkOut)).toBeVisible();
  await cart.gotoCheckOut();
  await expect(page).toHaveURL(/.*checkout-step-one.html/);
  await expect(page.locator(cart.title)).toBeVisible();
  await cart.fillupDetails("Riddhika", "Chatterjee", "2582 HR");
  await expect(page.locator(cart.continueBtn)).toBeVisible();
  await cart.clickToContinueOrder();
  await cart.completeOrder();
  await home.logOff();
  await expect(page).toHaveURL(login.url);
});

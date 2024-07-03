exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//div[@class="cart_item"]';
    this.checkOut = '//button[@id="checkout"]';
    this.title = '//span[@class="title"]';
    this.firstName = '//input[@id="first-name"]';
    this.lastName = '//input[@id="last-name"]';
    this.postalCode = '//input[@id="postal-code"]';
    this.continueBtn = '//input[@id="continue"]';
    this.finishBtn = '//button[@id="finish"]';
  }

  async checkProductInCart(productName) {
    const productsInCart = await this.page.$$(this.noOfProducts);
    for (const product of productsInCart) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        return true;
        break;
      }
    }
  }

  async gotoCheckOut() {
    await this.page.locator(this.checkOut).click();
  }

  async fillupDetails(firstname, lastname, postalcode) {
    await this.page.locator(this.firstName).fill(firstname);
    await this.page.locator(this.lastName).fill(lastname);
    await this.page.locator(this.postalCode).fill(postalcode);
  }

  async removeProductFromCart(productName) {
    // Use a specific locator based on the product name
    const removeFromCartBtn = `//div[contains(text(), "${productName}")]/ancestor::div[@class="cart_item_label"]//button[text()="Remove"]`;
    await this.page.locator(removeFromCartBtn).click();
  }

  verifyRemovedProductFromCart(productName) {
    // Use a specific locator based on the product name
    return `//div[contains(text(), "${productName}")]/ancestor::div[@class="cart_item_label"]//button[text()="Remove"]`;
  }

  async clickToContinueOrder() {
    await this.page.locator(this.continueBtn).click();
  }

  async completeOrder() {
    await this.page.locator(this.finishBtn).click();
  }
};

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = '//div[@class="inventory_item"]';
    this.addToCartBtn = '//button[text()="Add to cart"]';
    this.cartIcon = '//a[@class="shopping_cart_link"]';
    this.sort = '//select[@class="product_sort_container"]';
    this.burgerMenu = '//button[@id="react-burger-menu-btn"]';
    this.logOutLink = '//a[@id="logout_sidebar_link"]';
    this.addtoCartOnesie = '//button[@id="add-to-cart-sauce-labs-onesie"]';
  }

  addToCartBtnIcon(productName) {
    // Use a specific locator based on the product name
    return `//div[contains(text(), "${productName}")]/ancestor::div[@class="inventory_item"]//button[text()="Add to cart"]`;
  }

  async addProductToCart(productName) {
    // Use a specific locator based on the product name
    const addToCartBtn = `//div[contains(text(), "${productName}")]/ancestor::div[@class="inventory_item"]//button[text()="Add to cart"]`;
    await this.page.locator(addToCartBtn).click();
  }

  async gotoCart() {
    await this.page.locator(this.cartIcon).click();
  }

  async sortItems() {
    await this.page.locator(this.sort).selectOption("lohi");
  }

  async logOff() {
    await this.page.locator(this.burgerMenu).click();
    await this.page.locator(this.logOutLink).click();
  }
};

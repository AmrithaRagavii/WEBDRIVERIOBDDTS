class ShoppingCartSummary {
    get shoppingCartHeader() { return $('#cart_title') }
    get validatingProductName() { return $('//a[text()="Faded Short Sleeve T-shirts"]') }
    get productTotalPrice() { return $('#total_price') }
    get deliveryAddressText() { return $('//li/h3') }
    get invoiceAddressText() { return $('//ul[@class="address last_item alternate_item box"]/li/h3') }
    get clickingOnProductProceedToCheckOutButton() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new ShoppingCartSummary
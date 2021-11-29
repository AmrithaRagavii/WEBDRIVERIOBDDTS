class Payment {
    get paymentMethodText() { return $('.page-heading') }
    get productNameText() { return $('//a[text()="Faded Short Sleeve T-shirts"]') }
    get productTotalPrice() { return $('#total_price') }
    get clickOnPaymentOptionButton() { return $('.bankwire') }
    get orderSummaryText() { return $('//div[@id="center_column"]/h1') }
    get clickOnConfirmOderButton() { return $('//span[text()="I confirm my order"]') }
}
export default new Payment
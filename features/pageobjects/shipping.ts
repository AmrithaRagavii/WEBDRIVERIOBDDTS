class Shipping {
    get shippingText() { return $('//h1') }
    get checkBoxTitle() { return $('//p[text()="Terms of service"]') }
    get selectingCheckBox() { return $('#cgv') }
    get ProceedToCheckOutButton() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new Shipping()
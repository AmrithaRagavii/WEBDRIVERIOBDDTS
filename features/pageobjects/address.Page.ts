class Address {
    get addressText() { return $('.page-heading') }
    get ChooseDeliveryOption() { return $('//label [@for="id_address_delivery"]') }
    get addressDropDownlist() { return $('#id_address_delivery') }
    get deliveryAddress() { return $('//h3[text()="Your delivery address"]') }
    get billingAddress() { return $('//h3[text()="Your billing address"]') }
    get CheckoutButton() { return $('[name="processAddress"]') }
}
export default new Address
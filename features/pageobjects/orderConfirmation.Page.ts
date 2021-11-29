class OrderConfirmation{
    get orderConfirmationHeader(){ return $('//h1')}
    get orderConfirmationDetails(){ return $('.cheque-indent')}
}
export default new OrderConfirmation
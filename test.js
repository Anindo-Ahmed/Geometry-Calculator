function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number! Please insert positive number!"
    }
    const perTicket = 120;
    const cost = 500 + (50 * 8);
    const fromTicketIncome = ticketSale * perTicket;
    const profitOrLoss = fromTicketIncome - cost;
    return profitOrLoss;
}
console.log(calculateMoney(-130));

function budgetCalculor(watch, phone,laptop) {
        var totalBill = 0;
        var watchBill = watch * 50;
        var phoneBill = phone * 100;
        var laptopBill = laptop * 500;
        totalBill = watchBill + phoneBill + laptopBill;

        return totalBill;
}
var totalBill = budgetCalculor(3, 6, 7);
console.log(totalBill);
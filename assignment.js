


//No:1

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var meter = kilometerToMeter(33);
console.log(meter);



//No:2

function budgetCalculator(watch, phone,laptop) {
    var totalBill = 0;
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    totalBill = watchPrice + phonePrice + laptopPrice;

    return totalBill;
}
var totalBill = budgetCalculator (3, 6, 9);
console.log(totalBill);



//No:3

function hotelCost(day) {
    var totalBill = 0;
    if(day <= 10) {
        totalBill = day * 100;
    }
    else if(day <=20) {
        var firstTenDays = 10*100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        totalBill =  firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var thirdAllDay = remainingDays * 50;
        totalBill = firstTenDays + secondTenDays + thirdAllDay;
    }
    return totalBill;
}
var bill = hotelCost(99);
console.log(bill);



//No:4

var friends = ['Raju', 'Nirmol', 'Rony', 'Razubiswas', 'Sukumar biswas', 'Ajit kumar biswas'];
function megaFriend() {
  var maxFriendName = friends[0];
  for (var i = 1; i < friends.length; i++) {
    var element = friends[i];
  }
  if (element.length > maxFriendName.length) {
    maxFriendName = element;
  }
  return maxFriendName;
}
var bigFriendName = megaFriend(friends);
console.log(bigFriendName);

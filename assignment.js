
//github link = https://github.com/Razu-Bisaws/assignment.js/blob/main/assignment.js

//No:1

// function kilometerToMeter(kilometer) {
//     var meter = kilometer * 1000;
//     return meter;
// }
// var meter = kilometerToMeter(33);
// console.log(meter);



//No:2

// function budgetCalculator(watch, phone,laptop) {
//     var totalBill = 0;
//     var watchPrice = watch * 50;
//     var phonePrice = phone * 100;
//     var laptopPrice = laptop * 500;
//     totalBill = watchPrice + phonePrice + laptopPrice;

//     return totalBill;
// }
// var totalBill = budgetCalculator (3, 6, 9);
// console.log(totalBill);



//No:3

// function hotelCost(day) {
//     var totalBill = 0;
//     if(day <= 10) {
//         totalBill = day * 100;
//     }
//     else if(day <=20) {
//         var firstTenDays = 10*100;
//         var remainingDays = day - 10;
//         var secondTenDays = remainingDays * 80;
//         totalBill =  firstTenDays + secondTenDays;
//     }
//     else {
//         var firstTenDays = 10 * 100;
//         var secondTenDays = 10 * 80;
//         var remainingDays = day - 20;
//         var thirdAllDay = remainingDays * 50;
//         totalBill = firstTenDays + secondTenDays + thirdAllDay;
//     }
//     return totalBill;
// }
// var bill = hotelCost(99);
// console.log(bill);



//No:4

// var friends = ['Raju', 'Nirmol', 'Rony', 'Razubiswas', 'Sukumar biswas', 'Ajit kumar biswas'];
// function megaFriend() {
//   var maxFriendName = friends[0];
//   for (var i = 1; i < friends.length; i++) {
//     var element = friends[i];
//   }
//   if (element.length > maxFriendName.length) {
//     maxFriendName = element;
//   }
//   return maxFriendName;
// }
// var bigFriendName = megaFriend(friends);
// console.log(bigFriendName);

// kilometer To Meter converter 
function kilometerToMeter(kilometer) {
	if (kilometer <= 0) {
		return 'you enter wrong value';
	} else {
		var meter = kilometer * 1000;
		return meter;
	}
}
console.log(kilometerToMeter(5.21));
function budgetCalculator(watch, mobile, laptop) {
	if (watch > 0 && mobile > 0 && laptop > 0) {
		var totalCost = watch * 50 + mobile * 100 + laptop * 500;
		return totalCost;
	} else {
		return 'Enter Valid quantity';
	}
}
console.log('Total budget: ', budgetCalculator(10, 6, 10));

//  hotelCost Function
function hotelCost(days) {
	var totalRent = 0;
	function first10Day(day) {
		return day * 100;
	}
	function second10Day(day) {
		return day * 80;
	}
	function after20Day(day) {
		return day * 50;
	}
	if (days > 0) {
		if (days <= 10) {
			totalRent = first10Day(days);
		} else if (days <= 20) {
			totalRent = second10Day(days - 10) + first10Day(10);
		} else {
			
			totalRent = first10Day(10) + second10Day(10) + after20Day(days - 20);
		}
	} else {
		return ' Enter Correct rent';
	}
	return totalRent;
}
console.log('Your Rent is:', hotelCost(17));


// MegaFriend
	var megaFriend = [];

	if (firends.length <= 0) {
		return 'Please Enter Your all Frineds Name';
	} else {
		for (var i = 0; i < firends.length; i++) {
			if (firends[i].length > megaFriend.length) {
				megaFriend = firends[i];
			}
		}
	}
	// Return the final value
	return megaFriend;

var firend = [
	'abc',
	'abcd',
	'abcdf',
	'abcde',
	'abcdef',
	'abcdefg',
	'abcdefgh',
];
console.log(megaFriend(firend));
 
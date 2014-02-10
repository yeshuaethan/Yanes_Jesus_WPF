//Jesus Yanes, 2/10/14 Expression Worksheet assigment.


// Calculate Sparky's age in dog years.
var humanYear = 5; //Sparky is 5 years in human.
var dogYear = 7; //Dog years is seven times human years.
var sparkyAge = humanYear*dogYear
console.log(sparkyAge);
// Sparky the dog is 35 years old.


// Slice of Pie Part I
var slicePerPizza = 8;
var partygoer = 25;
var pizzasOrdered = 5;
var totalPizzaPerPerson = (slicePerPizza * pizzasOrdered) / partygoer;
console.log(totalPizzaPerPerson)
// Thee total amount of pizza that each partygoer had was 1.6.


// Slice of Pie Part II
var slicePerPizza = 8;
var partygoer = 25;
var pizzasOrdered = 5;
var totalPizzaPerPerson = (slicePerPizza * pizzasOrdered) / partygoer;
var sliceSparkyEats = (slicePerPizza * pizzasOrdered) % partygoer; 
console.log(sliceSparkyEats)
// slice sparky eats is 15.


// Average Shopping Bill
var weeklyExpenses = [95 , 185 , 120 , 250, 150]; // Array of 5 Weekly Shopping Expenses
var total = weeklyExpenses [0] + weeklyExpenses [1] + weeklyExpenses [2] + weeklyExpenses [3] + weeklyExpenses [4]; 
console.log(total);
// Total Monthly Expenses in Grocery 800.
var monthlyExpense = 800; // Array of the total 5 weeks expenses
var totalWeekInaMonth = 5; // Divided by 5 weeks in a month
var totalWeekPercentage = monthlyExpense / totalWeekInaMonth;
console.log(totalWeekPercentage)
// $160.00 per week.


// Discounts
var cellPhoneOriginalPrice = 600;  // Item Original Price $600.00
var percentDiscount = 0.50; // Store Discount 50%
var tax = 6.0; // Florida State Tax
var cellPhoneAfterDiscount = cellPhoneOriginalPrice - (cellPhoneOriginalPrice * percentDiscount) // Item original price, minus original price, times discount. 
var cellPhoneAfterDiscountwithTax = cellPhoneAfterDiscount * tax / 100
// Cellphone after discount with no tax is $300.00
var cellPhoneTotal = cellPhoneAfterDiscountwithTax + cellPhoneAfterDiscount;
console.log(cellPhoneTotal)
// Total of the cellphone after discount with tax is $318.00
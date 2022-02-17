document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalIncome = document.getElementById("income");
  const incomeValue = parseInt(totalIncome.value);

  //Getting access to all the input values
  const foodInput = document.getElementById("food");
  const foodInputValue = parseInt(foodInput.value);
  const rentInput = document.getElementById("rent");
  const rentInputValue = parseInt(rentInput.value);
  const clothesInput = document.getElementById("clothes");
  const clothesInputValue = parseInt(clothesInput.value);

  //Calculating total Expanse
  const expanse = document.getElementById("total-expense");
  const totalExpanse = parseInt(
    foodInputValue + rentInputValue + clothesInputValue
  );

  //Error Handing for if someone spend more then their income
  if (totalExpanse > incomeValue) {
    alert("Sorry,You can't spend more than you have!");
  } else {
    expanse.innerText = totalExpanse;
    const balance = document.getElementById("total-balance");
    const totalBalance = parseInt(incomeValue - totalExpanse);
    balance.innerText = totalBalance;
  }

  //   Clearing the input fields
  totalIncome.value = "";
  foodInput.value = "";
  rentInput.value = "";
  clothesInput.value = "";
});

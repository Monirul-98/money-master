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

  foodInput.value = "";
  rentInput.value = "";
  clothesInput.value = "";
});

document.getElementById("save-btn").addEventListener("click", function () {
  //Getting the saving input
  const save = document.getElementById("save");
  const saveValue = parseFloat(save.value);

  //getting the income inout
  const totalIncome = document.getElementById("income");
  const incomeValue = parseInt(totalIncome.value);

  //Calculating percantage
  const percentage = parseFloat(saveValue / 100);
  const savingPercent = incomeValue * percentage;

  //Getting the balance
  const balance = document.getElementById("total-balance");
  console.log(balance.innerText);

  // Error handling for if saving amount is greater the total balance
  if (savingPercent > balance.innerText) {
    alert("Sorry! You don't have enough money to save.");
  } else {
    //Getting the total saving input and passing the saving value
    const totalSaving = document.getElementById("total-save");
    totalSaving.innerText = savingPercent;
    //Calculating remaining balance
    document.getElementById("remaining").innerText =
      parseInt(balance.innerText) - parseFloat(savingPercent);
  }

  save.value = "";
});

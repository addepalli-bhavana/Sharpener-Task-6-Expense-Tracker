let expenditure = document.getElementById("expenditure");
let description = document.getElementById("description");
let category = document.getElementById("category");
document.getElementsByClassName("btn")[0].addEventListener("click", (e) => {
  if (
    expenditure.value == "" ||
    description.value == "" ||
    category.value == ""
  ) {
    alert("Please fill all the details");
  } else {
    let obj = {
      expenditure: expenditure.value,
      description: description.value,
      category: category.value,
    };
    localStorage.setItem(description.value, JSON.stringify(obj));

    let expenses = document.getElementsByClassName("expenses")[0];
    let liTag = document.createElement("li");
    liTag.className = "expense";

    let divOne = document.createElement("div");
    divOne.className = "expense-amt";
    divOne.textContent = "Expenditure : " + expenditure.value;

    let divTwo = document.createElement("div");
    divTwo.className = "expense-desc";
    divTwo.textContent = "Description : " + description.value;

    let divThree = document.createElement("div");
    divThree.className = "expense-category";
    divThree.textContent = "Category : " + category.value;

    let btnOne = document.createElement("button");
    btnOne.setAttribute("type", "button");
    btnOne.setAttribute("class", "delete-btn");
    btnOne.innerText = "DELETE";
    btnOne.addEventListener("click", deleteExpense);
    function deleteExpense() {
      btnOne.parentElement.remove();
      localStorage.removeItem(obj.description);
    }

    let btnTwo = document.createElement("button");
    btnTwo.setAttribute("type", "button");
    btnTwo.setAttribute("class", "edit-btn");
    btnTwo.innerText = "EDIT";
    btnTwo.addEventListener("click", () => {
      btnTwo.parentElement.remove();
      localStorage.removeItem(obj.description);
      expenditure.value = obj.expenditure;
      description.value = obj.description;
      category.value = obj.category;
    });

    liTag.append(divOne);
    liTag.append(divTwo);
    liTag.append(divThree);
    liTag.append(btnOne);
    liTag.append(btnTwo);
    expenses.append(liTag);
    expenditure.value = "";
    description.value = "";
    category.value = "";
  }
});

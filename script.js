let addBtn;
let ulList;
let listElement;
let popUpAdd;
let popUpEdit;
let dataInsert;
let dataInsertEdit;
let saveBtn;
let saveBtnEdit;
let deleteBtn;
let cancelBtn;
let cancelBtnEdit;
let popUpAssign;
let selectedListItem;

const main = () => {
  prepareElements();
  prepareEvents();
};

const prepareElements = () => {
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".list ul");
  listElement = document.querySelector(".list li");
  popUpAdd = document.querySelector(".pop-up-add");
  popUpEdit = document.querySelector(".pop-up-edit");
  dataInsert = document.querySelectorAll(".data-insert")[0];
  dataInsertEdit = document.querySelectorAll(".data-insert")[1];
  saveBtn = document.querySelectorAll(".save")[0];
  saveBtnEdit = document.querySelectorAll(".save")[1];
  deleteBtn = document.querySelector(".delete");
  cancelBtn = document.querySelectorAll(".cancel")[0];
  cancelBtnEdit = document.querySelectorAll(".cancel")[1];
  checkAssign = document.querySelector(".check-assignment");
};

const prepareEvents = () => {
  addBtn.addEventListener("click", showPopUpAdd);
  ulList.addEventListener("click", showPopUpEdit);
  saveBtn.addEventListener("click", addElement);
  saveBtnEdit.addEventListener("click", editElement);
  deleteBtn.addEventListener("click", deleteElement);
  cancelBtn.addEventListener("click", hidePopUpAdd);
  cancelBtnEdit.addEventListener("click", hidePopUpEdit);
};

const showPopUpAdd = () => {
  popUpAdd.style.display = "block";
};

const hidePopUpAdd = () => {
  popUpAdd.style.display = "none";
};

const showPopUpEdit = (event) => {
  selectedListItem = event.target;
  console.log( selectedListItem);
  const listItemText = selectedListItem.textContent;
  dataInsertEdit.value = listItemText;
  popUpEdit.style.display = "block";
};

const hidePopUpEdit = () => {
  popUpEdit.style.display = "none";
};

const addElement = () => {
  const inputValue = dataInsert.value;
  checkAssign.style.display = "none";

  if (inputValue) {
    const newElement = document.createElement("li");
    const textNode = document.createTextNode(inputValue);
    newElement.appendChild(textNode);
    ulList.appendChild(newElement);
    dataInsert.value = "";

    hidePopUpAdd();
  }
};

const editElement = () => {
  const inputValue = dataInsertEdit.value;
  console.log(inputValue)

  if (inputValue) {
    selectedListItem.textContent = inputValue;
    dataInsertEdit.value = "";

    hidePopUpEdit();
  }

};

const deleteElement = () => {
  selectedListItem.remove();
  hidePopUpEdit();
};

document.addEventListener("DOMContentLoaded", main);
const redeemBottleDialog = document.getElementById("redeem-bottle-dialog");

const openRedeemBottleDialogBtn = document.getElementById(
  "open-redeem-bottle-dialog-btn"
);

const closeRedeemBottleDialogBtn = document.getElementById(
  "close-redeem-bottle-dialog"
);

openRedeemBottleDialogBtn.addEventListener("click", () => {
  redeemBottleDialog.style.display = "flex";
});

closeRedeemBottleDialogBtn.addEventListener("click", () => {
  redeemBottleDialog.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === redeemBottleDialog) {
    redeemBottleDialog.style.display = "none";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && redeemBottleDialog.style.display === "flex") {
    redeemBottleDialog.style.display = "none";
  }
});

// ----------------------------------------------------------------------

const redeemBottleForm = document.getElementById("redeem-bottle-form");

const bottleIdField = document.getElementById("bottleId");
const bottleIdError = document.getElementById("bottleId-error");

const bottleNameField = document.getElementById("bottleName");
const bottleNameError = document.getElementById("bottleName-error");

function validateRedeemBottleForm(event) {
  event.preventDefault();

  bottleIdError.textContent = "";
  bottleNameError.textContent = "";

  let isValid = true;

  if (bottleIdField.value.trim() === "") {
    bottleIdError.textContent = "Bottle Id is required";
    bottleIdError.style.display = "block";
    isValid = false;
  } else if (bottleIdField.value.length < 3) {
    bottleIdError.textContent = "Bottle Id must be at least 3 characters";
    bottleIdError.style.display = "block";
    isValid = false;
  }

  if (bottleNameField.value.trim() === "") {
    bottleNameError.textContent = "Bottle Name is required";
    bottleNameError.style.display = "block";
    isValid = false;
  } else if (bottleNameField.value.length < 3) {
    bottleNameError.textContent = "Bottle Name must be at least 3 characters";
    bottleNameError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    redeemBottleForm.reset();
    redeemBottleDialog.style.display = "none";
    window.location.href = "./bottle.html";
  }
}

redeemBottleForm.addEventListener("submit", validateRedeemBottleForm);

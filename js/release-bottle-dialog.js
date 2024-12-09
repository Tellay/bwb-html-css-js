const releaseBottleDialog = document.getElementById("release-bottle-dialog");

const openReleaseBottleDialogBtn = document.getElementById(
  "open-release-bottle-dialog-btn"
);

const closeReleaseBottleDialogBtn = document.getElementById(
  "close-release-bottle-dialog"
);

openReleaseBottleDialogBtn.addEventListener("click", () => {
  releaseBottleDialog.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeReleaseBottleDialogBtn.addEventListener("click", () => {
  releaseBottleDialog.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target === releaseBottleDialog) {
    releaseBottleDialog.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && releaseBottleDialog.style.display === "flex") {
    releaseBottleDialog.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ----------------------------------------------------------------------

const releaseBottleForm = document.getElementById("release-bottle-form");

const bottleNameField = document.getElementById("bottle-name");
const bottleNameError = document.getElementById("bottle-name-error");

function validateReleaseBottleForm(event) {
  event.preventDefault();

  const correctBottleName = "Bottle 1";
  bottleNameError.textContent = "";

  let isValid = true;

  if (bottleNameField.value.trim() === "") {
    bottleNameError.textContent =
      "To confirm, type the bottle name in the box above";
    bottleNameError.style.display = "block";
    isValid = false;
  } else if (bottleNameField.value.trim() !== correctBottleName) {
    bottleNameError.textContent =
      "To confirm, type the bottle name in the box above";
    bottleNameError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    releaseBottleForm.reset();
    releaseBottleDialog.style.display = "none";
    window.location.href = "./dashboard.html";
  }
}

releaseBottleForm.addEventListener("submit", validateReleaseBottleForm);

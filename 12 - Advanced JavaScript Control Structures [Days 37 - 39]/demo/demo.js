const productNameInput = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const MaxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(e) {
  const enteredText = e.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = MaxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInput.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInput.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInput.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInput.classList.remove("warning");
  }
}

productNameInput.addEventListener("input", updateRemainingCharacters);

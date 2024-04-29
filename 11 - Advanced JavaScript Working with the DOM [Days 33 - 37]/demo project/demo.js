const productNameInput = document.getElementById("product-name");
const remainingChars = document.getElementById("remaining-chars");
const MaxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(e) {
  const enteredText = e.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharacters = MaxAllowedChars - enteredTextLength;

  remainingChars.textContent = remainingCharacters;
}

productNameInput.addEventListener("input", updateRemainingCharacters);

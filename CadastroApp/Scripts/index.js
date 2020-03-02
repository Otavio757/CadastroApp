$(document).ready(function () {
	//Completa as barras quando o usuário está digitando a data de nascimento
	$("input").keyup(function (event) {
		var key = event.originalEvent.key;

		var birthDateInput = document.getElementById("birth_date");

		if (birthDateInput.value.length === 2 || birthDateInput.value.length === 5) {
			if (key !== "Backspace") {
				birthDateInput.value += "/";
			}

			else {
				var valueInput = birthDateInput.value;
				birthDateInput.value = valueInput.substring(0, valueInput.length - 1);
			}
		}
	});
});


//Verifica se o valor digitado é um número inteiro, que esse input só aceita números inteiros
function isInteger(which, keyCode) {
	if ((which < 48 || which > 57) && (which != 8 && which != 45 && keyCode != 9 && keyCode != 37 && keyCode != 39)) {
		return false;
	}

	else {
		return true;
	}
}

function submitRegisterForm() {

}
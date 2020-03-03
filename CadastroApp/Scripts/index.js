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
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var birthDate = document.getElementById("birth_date");
	var pictureUrl = document.getElementById("picture");

	//Aqui seria o momento de enviar os dados do celular para o controlador UsersController via API Rest
	$.ajax({
		url: 'api/users/adduser',
		type: 'POST',
		data: {
			"name": name,
			"email": email,
			"birthDate": birthDate,
			"pictureUrl": pictureUrl
		},
		dataType: 'json',
		success: function (data) {
			console.log("Usuário cadastrado com sucesso");
		}
	}); 
}

function showForm() {
	document.getElementById("search_user").style.display = "none";
	document.getElementById("edit_user").style.display = "none";
	document.getElementById("list_users").style.display = "none";
	document.getElementById("form").style.display = "block";
}

function searchUser() {
	var keyword = document.getElementById("search_user").value;

	$.ajax({
		url: 'api/users/searchuser',
		type: 'GET',
		data: {
			"keyword": keyword,
		},
		dataType: 'json',
		success: function (data) {
			var html = "Usuários encontrados:";

			for (var i = 0; i < data.length; i++) {
				html += "<br><br>Usuário " + i +
					"<br>Nome: " + data.name +
					"<br>E-mail: " + data.email +
					"<br>Data de nascimento: " + data.birthDate.day + "/" + data.birthDate.month + "/" + data.birthDate.year +
					"<br>Foto:<br> <img src='" + data.pictureUrl + "'></img>";
			}

			document.getElementById("search_user").innerHTML = html;
		}
	}); 
}

function showSearchUser() {
	document.getElementById("edit_user").style.display = "none";
	document.getElementById("list_users").style.display = "none";
	document.getElementById("form").style.display = "none";
	document.getElementById("search_user").style.display = "block";
}

function listUsers() {
	$.ajax({
		url: 'api/users/getusers',
		type: 'GET',
		data: {
		},
		dataType: 'json',
		success: function (data) {
			var html = "Lista de usuários:";

			for (var i = 0; i < data.length; i++) {
				html += "<br><br>Usuário " + i +
					"<br>Nome: " + data.name +
					"<br>E-mail: " + data.email +
					"<br>Data de nascimento: " + data.birthDate.day + "/" + data.birthDate.month + "/" + data.birthDate.year +
					"<br>Foto:<br> <img src='" + data.pictureUrl + "'></img>";
			}

			document.getElementById("list_users").innerHTML = html;
		}
	}); 
}

function showListUsers() {
	document.getElementById("search_user").style.display = "none";
	document.getElementById("edit_user").style.display = "none";
	document.getElementById("form").style.display = "none";
	document.getElementById("list_users").style.display = "block";
	listUsers();
}

function editUser() {
	document.getElementById("edit_user").style.display = "none";
	document.getElementById("edit_user_form").style.display = "block";

	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var birthDate = document.getElementById("birth_date");
	var pictureUrl = document.getElementById("picture");

	//Aqui seria o momento de enviar os dados do celular para o controlador UsersController via API Rest
	$.ajax({
		url: 'api/users/edituser',
		type: 'POST',
		data: {
			"name": name,
			"email": email,
			"birthDate": birthDate,
			"pictureUrl": pictureUrl
		},
		dataType: 'json',
		success: function (data) {
			console.log("Usuário cadastrado com sucesso");
		}
	}); 
}

function showEditUser() {
	document.getElementById("search_user").style.display = "none";
	document.getElementById("list_users").style.display = "none";
	document.getElementById("form").style.display = "none";
	document.getElementById("edit_user").style.display = "block";
}
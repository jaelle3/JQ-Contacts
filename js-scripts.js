$(document).ready(function() {

	});

	function Contact(firstname, lastname, phone, email, city) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.email = email;
		this.country = country;
	};

	var allContacts = [];

	$("#roll").click(function(event) {

		var firstname = $("#fname").val();

		var lastname = $("#lname").val();

		var phone = $("#phone").val();

		var email = $("#email").val();

		var country = $("#city").val();

			var newcontact = {firstname, lastname, phone, email, country};
			allContacts.push(newcontact);

			
			console.log(allContacts);
			
	});
	
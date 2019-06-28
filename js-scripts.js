$(document).ready(function() {

	});

	function Contact(firstname, lastname, phone, email, city) {
		this.firstname = firstname;
		
		this.phone = phone;
		
		this.email = email;
		
		this.address = address;
	};

	var allContacts = [];

	$("#roll").click(function(event) {

		var firstname = $("#fname").val();

		var phone = $("#phone").val();

		var email = $("#email").val();

		var country = $("#address").val();

			var newcontact = {firstname, lastname, phone, email, address};
		
			allContacts.push(newcontact);

			
			console.log(allContacts);
			
	});
	

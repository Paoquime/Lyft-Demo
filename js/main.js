$(window).ready(function() {
	$(".loading").fadeOut("slow");
});


$("#formRegistry").validate ({
	rules: {
      firstName: {
      	required: true,
		number: false,
		minlength: 3,
		maxlength: 10
	  },

      lastName: {
      	required: true,
		number: false,
		minlength: 3,
		maxlength: 15    		
      },

      email: {
        required: true,
        email: true
      },
      agree: {
        required: true,
      }	 

	},

	messages: {
		firstName: {
			required: "First Name is a required field ",
			number: "Enter letters , no numbers",
			minlength: "Your first name must have more than 3 letters",
			maxlength: "Your first name must haven't more than 10 letters"			
		},

		lastName: {
			required: "Last Name is a required field ",
			number: "Enter letters , no numbers",
			minlength: "Your last name must have more than 3 letters",
			maxlength: "Your last name must haven't more than 15 letters"	
		},

		email: {
			required: "Email is a required field ",
			number: "Enter a valid email",
		},

		agree: {
			required: "You need to accept the terms to continue"
		} 		  		
	},
    	submitHandler: function() {
    		$("#nextPageMap").removeAttr("disabled");
		  }
		});

    $("#nextPageMap").click(function () {
        if ($("#formRegistry").valid()) {
	    		var nombre =  $("#first-name").val();
	    		var apellido =  $("#last-name").val();
	    		var correo =  $("#e-mail").val();

				localStorage.setItem("nameSaved", nombre);
				localStorage.setItem("adressSaved", apellido);
				localStorage.setItem("mailSaved", correo);  
	    		window.location.href = "map.html"
    		}
    });

    



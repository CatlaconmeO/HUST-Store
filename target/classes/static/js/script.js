$(function(){

// User Register validation

	var $userRegister=$("#userRegister");

	$userRegister.validate({
		
		rules:{
			name:{
				required:true,
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNumber: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 10
			},
			password: {
				required: true,
				space: true
			},
			confirmpassword: {
				required: true,
				equalTo: '#pass'

			},
			address: {
				required: true,
			},

			city: {
				required: true,
			},
			state: {
				required: true,
			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			}, img: {
				required: true,
			}
			
		},
		messages:{
			name:{
				required:'Please enter your name',
			},
			email: {
				required: 'Email required',
				space: 'Space not allowed',
				email: 'Invalid email'
			},
			mobileNumber: {
				required: 'Please enter your mobile number',
				space: 'Space not allowed',
				numericOnly: 'Invalid mobnum',
				minlength: 'Mobnum must be 10 digit'
			},

			password: {
				required: 'Please enter your password',
			},
			confirmpassword: {
				required: 'Please enter your confirm password',
				equalTo: 'Password mismatch'
			},
			address: {
				required: 'Address required',
			},

			city: {
				required: 'City required',
			},
			state: {
				required: 'State required',
			},
			pincode: {
				required: 'Pincode required',
				space: 'Space not allowed',
				numericOnly: 'Invalid pincode'

			},
			img: {
				required: 'Image required',
			}
		}
	})
	
	
// Orders Validation

var $orders=$("#orders");

$orders.validate({
		rules:{
			firstName:{
				required:true,
				lettersonly:true
			},
			lastName:{
				required:true,
				lettersonly:true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNo: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 12

			},
			address: {
				required: true,
				all: true

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			},
			paymentType:{
			required: true
			}
		},
		messages:{
			firstName:{
				required:'first required',
				lettersonly:'invalid name'
			},
			lastName:{
				required:'last name required',
				lettersonly:'invalid name'
			},
			email: {
				required: 'email name must be required',
				space: 'space not allowed',
				email: 'Invalid email'
			},
			mobileNo: {
				required: 'mob no must be required',
				space: 'space not allowed',
				numericOnly: 'invalid mob no',
				minlength: 'min 10 digit',
				maxlength: 'max 12 digit'
			}
		   ,
			address: {
				required: 'address must be required',
				all: 'invalid'

			},

			city: {
				required: 'city must be required',
				space: 'space not allowed'

			},
			state: {
				required: 'state must be required',
				space: 'space not allowed'

			},
			pincode: {
				required: 'pincode must be required',
				space: 'space not allowed',
				numericOnly: 'invalid pincode'

			},
			paymentType:{
			required: 'select payment type'
			}
		}	
})

// Reset Password Validation

var $resetPassword=$("#resetPassword");

$resetPassword.validate({
		
		rules:{
			password: {
				required: true,
			},
			confirmPassword: {
				required: true,
				equalTo: '#pass'
			}
		},
		messages:{
			password: {
				required: 'Please enter your password',
			},
			confirmpassword: {
				required: 'Please enter your confirm password',
				equalTo: 'Password mismatch'
			}
		}	
})



	
	
	
	
})



jQuery.validator.addMethod('lettersonly', function(value, element) {
		return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
	});
	
		jQuery.validator.addMethod('space', function(value, element) {
		return /^[^-\s]+$/.test(value);
	});

	jQuery.validator.addMethod('all', function(value, element) {
		return /^[^-\s][a-zA-Z0-9_,.\s-]+$/.test(value);
	});


	jQuery.validator.addMethod('numericOnly', function(value, element) {
		return /^[0-9]+$/.test(value);
	});

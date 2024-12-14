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
				},
				lastName:{
					required:true,
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
					maxlength: 10
	
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
				},
				paymentType:{
				required: true
				}
			},
			messages:{
				firstName:{
					required:'Invalid',
				},
				lastName:{
					required:'Last name required',
				},
				email: {
					required: 'Email required',
					space: 'Space not allowed',
					email: 'Invalid email'
				},
				mobileNo: {
					required: 'Invalid mobile number',
					space: 'space not allowed',
					numericOnly: 'Number only',
					minlength: 'Min 10 digit',
					maxlength: 'Max 10 digit'
				}
			   ,
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
					space: 'space not allowed',
					numericOnly: 'Number only'
				},
				paymentType:{
				required: 'Please select payment type'
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
	
package com.ecom.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class UserDtls {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotEmpty(message = "Fname is required")
	private String name;

	@NotEmpty(message = "Mobile number is required")
	@Digits(fraction = 0, integer = 10)
	@Size(min = 10, max = 10, message = "Mobile number must be 10 digits")
	private String mobileNumber;

	@Email(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
	private String email;

	@NotEmpty(message = "Address is required")
	private String address;

	@NotEmpty(message = "City is required")
	private String city;

	@NotEmpty(message = "State is required")
	private String state;
	
	@NotEmpty(message = "Please enter pincode")
	private String pincode;

	@NotEmpty(message = "Password is required")
	private String password;

	@NotEmpty(message = "Profile image is required")
	private String profileImage;

	private String role;

	private Boolean isEnable;

	private Boolean accountNonLocked;

	private Integer failedAttempt;

	private Date lockTime;
	
	private String resetToken;

}

// Function to calculate BMI
function calculateBMI() {
	// Get weight, height and gender input values
	let weight = parseFloat(document.getElementById("weight").value);
	let height = parseFloat(document.getElementById("height").value);
	let gender = document.getElementById("gender").value;
	
	// Check if weight and height are valid
	if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
		alert("Please enter valid weight and height values.");
		return;
	}
	
	// Calculate BMI
	let bmi = weight / ((height/100) ** 2);
	
	// Round off BMI to 1 decimal point
	bmi = bmi.toFixed(1);
	
	// Determine BMI category based on gender
	let category = "";
	if (gender === "male") {
		if (bmi < 20.7) {
			category = "Underweight";
		} else if (bmi < 26.4) {
			category = "Normal";
		} else if (bmi < 27.8) {
			category = "Slightly overweight";
		} else if (bmi < 31.1) {
			category = "Overweight";
		} else {
			category = "Obese";
		}
	} else {
		if (bmi < 18.5) {
			category = "Kekurangan berat badan";
		} else if (bmi < 24.9) {
			category = "Normal (Ideal)";
		} else if (bmi < 29.9) {
			category = "Kelebihan berat badan";
		} else {
			category = "Kegemukan (Obesitas)";
		}
	}
	
	// Display BMI result
	document.getElementById("result").innerHTML = "Your BMI is " + bmi + " (" + category + ").";
}
``
function volume_sphere(event) {
	
   event.preventDefault(); // prevent form submission

	
    let radius = document.querySelector("#radius");
    let volume = document.querySelector("#volume");
    let R = parseFloat(radius.value);

    // Check if the input is a non-negative number
    if (R < 0) {
        volume.value = 'NaN';
    } else {
        let V = (4/3)*Math.PI*Math.pow(R, 3);
        volume.value = V.toFixed(4); // Round to 4 decimal places
    }
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}
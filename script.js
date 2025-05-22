const locationDropdownBtn = document.getElementById('locationDropdownBtn');
    console.log(locationDropdownBtn);
    const locationDropdown = document.getElementById('locationDropdown');
    
    locationDropdownBtn.addEventListener('click', function() {
        console.log("show this");
        locationDropdown.classList.toggle('hidden');

        callbackDropdown.classList.add('hidden');
    });


const callbackDropdownBtn = document.getElementById('callbackDropdownBtn');
    const callbackDropdown = document.getElementById('callbackDropdown');
    
    callbackDropdownBtn.addEventListener('click', function() {
        callbackDropdown.classList.toggle('hidden');
        
        locationDropdown.classList.add('hidden');
    });
const employeeList = document.querySelector('.employee-list');
let employee = [];

//Modal Window
const clickModal = document.querySelector('.employee-list');
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-employee');
const closeBtn = document.querySelector('.close-btn')

//Modal Window open and close
clickModal.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        var i = event.target.id;
        const modalEmployee = `
        <img src='${employee[i].image}' class="employee-photo" id="photo">
        <div class="employee-info">
            <h3 class="employee-name" id="name">${employee[i].firstName} ${employee[i].lastName}</h3>
            <p class="employee-email" id="email">${employee[i].email}</p>
            <p class="employee-city bottom-line" id="city">${employee[i].city}</p>
            <p class="employee-phone" id="phone">${employee[i].phoneNumber}</p>
            <p class="employee-address" id="address">${employee[i].address}, ${employee[i].state} ${employee[i].postcode}</p>
            <p class="employee-birthday" id="birthday">Birthday: ${employee[i].birthday.substring(0, 10)}</p>
        </div>
        `;
        modalContent.innerHTML = modalEmployee;
        modal.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

//fetch functions
for (i = 0; i < 12; i++) {
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => generateEmployee(data.results["0"]))
}

// functions
function generateEmployee(data) {
    var i = employee.length;
    employee.push(new Employee(data.name.first, data.name.last, data.email, data.location.city, data.picture.medium, data.phone, data.location.street, data.location.state, data.location.postcode, data.dob.date));
    const employeeItem = document.createElement('li');
    employeeItem.classList.add('employee');
    employeeList.appendChild(employeeItem);
    const employeeInformation = `
        <img src='${employee[i].image}' class="employee-photo" id="${i}">
        <div class="employee-info">
            <h3 class="employee-name">${employee[i].firstName} ${employee[i].lastName}</h3>
            <p class="employee-email">${employee[i].email}</p>
            <p class="employee-city">${employee[i].city}</p>
        </div>
    `;
    employeeItem.innerHTML = employeeInformation;
}


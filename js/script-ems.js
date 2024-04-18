let arEmployees

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    arEmployees= JSON.parse(localStorage.getItem('employees'))
} else {
    // CREATE AN ARRAY OF EMPLOYEES
 arEmployees= [
    [120,'Tania Mendez',5101,'tania.mendez@outlook.com','Engineering'],
    [121,'Mayra Iniguez',5114,'mayra.iniguez@outlook.com','Administrative'],
    [122,'Diego Salazar',5146,'diego.salazar@outlook.com','Marketing'],
    [123,'Kassandra Serrano',5112,'kassandra.serrano@outlook.com','Engineering'],
    [124,'Samuel Elizalde',5123,'samuel.elizalde@outlook.com','Sales'],
]
}

// GET DOM ELEMENTS
let form= document.getElementById('addForm')
let empTable= document.getElementById('addForm')
let empCount= document.getElementById('addForm')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')){

    }
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()

    // REBUILD THE TBODY FROM SCRATCH
    let tbody= document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    for (let employee in arEmployees) {
        tbody.innerHTML +=
        `
        <tr>
        <td>${employee[0]}</td>
        ${employee[1]}
        ${employee[2]}
        ${employee[3]}
        ${employee[4]}
        <td>
            <button class='btn btn-sm btn-light delete'>
                <i class='fa-solid fa-trash-can'></i>
            </button>
        </td>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
    empCount.value=`(${arEmployees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(arEmployees))
};
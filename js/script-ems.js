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
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let eID= parseInt(document.getElementById('id').value)
    let eName= parseInt(document.getElementById('name').value)
    let eExtension= parseInt(document.getElementById('extension').value)
    let eEmail= (document.getElementById('email').value)
    let eDept= (document.getElementById('department').value)

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let arrNewEmp= [eID, eName,eExtension,eEmail,eDept]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    arEmployees.push(arrNewEmp)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.requestFullscreen()

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
    
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')){
if (confirm('Are you sure you want to delete the user?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rIndex= e.target.parentElement.rIndex

            // REMOVE EMPLOYEE FROM ARRAY
             arEmployees.splice(rIndex-1,1)
        
            // BUILD THE GRID
            buildGrid()
        }
    }
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
        <td>${employee[1]}</td>
        <td>${employee[2]}</td>
        <td>${employee[3]}</td>
        <td>${employee[4]}</td>
        <td><button class='btn btn-sm btn-light delete'><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
    `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
    empCount.value=`(${arEmployees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(arEmployees))
};
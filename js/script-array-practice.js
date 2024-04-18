//STEP 1
let arrayMovies= ['The Pursuit of Happyness','Pay it forward','Braveheart','Gladiator','Dumb and Dumber']
console.log(arrayMovies[1])

//STEP 2
let movies= new Array[5]
movies[0]= 'The Pursuit of Happyness'
movies[1]= 'Pay it forward'
movies[2]= 'Braveheart'
movies[3]= 'Gladiator'
movies[4]= 'Dumb and Dumber'
console.log(movies(0))

//STEP 3
let movies= new Array[5]
movies[0]= 'The Pursuit of Happyness'
movies[1]= 'Pay it forward'
movies[2]= 'Braveheart'
movies[3]= 'Gladiator'
movies[4]= 'Dumb and Dumber'

movies[2]= 'Playlist'
console.log(movies.lenght)

//STEP 4
let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber']
delete movies(0)
console.log(movies)

//STEP 5
let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']
for (let movie in movies) {
    console.log(movies[movie])
}

//STEP 6
let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']
for (let i of movies) {
    console.log(i)
}

//STEP 7
let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']

for (let i of movies.sort()) {
    console.log(i)
}


// //STEP 8
// let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']
// let leastFavMovies=['Movie 1','Movie 2','Movie 3']
// console.log(`Movies I like: <br> ${movies[0]}<br>${movies[1]}<br>${movies[2]}<br>${movies[3]}<br>${movies[4]}<br>${movies[5]}<br>${movies[6]}<br>Movies I regret watching: ${leastFavMovies[0]}<br>${leastFavMovies[1]}<br>${leastFavMovies[2]}<br>`)

//STEP 9
// let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']
// let leastFavMovies=['Movie 1','Movie 2','Movie 3']
// let moviesNew= movies.concat(leastFavMovies)
// moviesNew.sort()
// console.log(moviesNew.reverse())

// //STEP 10
// let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']
// let leastFavMovies=['Movie 1','Movie 2','Movie 3']
// let moviesNew= movies.concat(leastFavMovies)
// console.log(moviesNew.lastindexof('Movie 3'))

//STEP 11
let movies= ['The Pursuit of Happyness','Pay it forward', 'Braveheart', 'Gladiator','Dumb and Dumber','Playlist','Oceans Eleven']
//let leastFavMovies=['Movie 1','Movie 2','Movie 3']
let moviesNew= movies.concat(leastFavMovies)
console.log(moviesNew.indexof('Movie 1'))

//STEP 12
let leastFavMovies=['Movie 1','Movie 2','Movie 3']

for (let i of leastFavMovies) {
    let leastFM= leastFavMovies.findIndex('Movie 1',i,leastFavMovies)
    console.log(leastFM)
    leastFM[i]= movies[i]
}

//STEP 13
let movies = [
    ["The Pursuit of Happyness", 1], 
    ["Pay it forward", 2], 
    ["Braveheart", 3], 
    ["Gladiator", 4], 
    ["Dumb and Dumber", 5]
];
let movieF
movies.forEach(movie => {
    movieF=movies.filter((movie) => {
        return typeof movie === 'string'
    })
     console.log(movieF)
});

//STEP 14
let employees= ['ZAK','JESSICA','MARK','FRED','SALLY'
]
showEmployee(employees)

function showEmployee (param1) {
    param1.forEach(employee => {
        console.log(`Employee: ${employee}`)

    })
    
}

//STEP 15
let data= [58, '', 'abcd', true, null, false, 0]
console.log(filterValues(data))

function filterValues (data) {
    let filteredVal= data.filter((item) => {
        if (item !== false || item !== null || item !== 0 || value !== "") {
            return item;
          }
    })
}

//STEP 16
let numbers= [10,20,30,40,50,60,70,80,90,99]
console.log(GetRandomNum(numbers))

function GetRandomNum(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

//STEP 17
let nums= [265,786,453,123,890,345,675,129]
console.log(largestNum(nums))

function largestNum(nums) {
let largestN= nums.reduce((prevNum, currentNum) => {

})
}
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return movies.map( movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter( movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {
//     if(moviesArray.length == 0){
//         return 0
//     }
//     const sum = moviesArray.reduce( (acc, movie) => acc + movie.score , 0 )
//     const average = sum / moviesArray.length
//     return Math.round(average * 100) / 100
// }

function sum2(a, b=0){
    return a+b
}

function scoresAverage(moviesArray) {
    if(moviesArray.length == 0){
        return 0
    }
    const sum = moviesArray.reduce( (acc, movie) => movie.score == '' ? acc : sum2(acc, movie.score) , 0 )
    const average = sum / moviesArray.length
    return Math.round(average * 100) / 100
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesList = moviesArray.filter( movie => movie.genre.includes('Drama'))
    return scoresAverage( dramaMoviesList )
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copy = JSON.parse(JSON.stringify(moviesArray))
    return copy.sort( (a, b) => {
        if (a.year - b.year){ return a.year - b.year }
        return a.title.localeCompare( b.title )
    } )
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copy = JSON.parse(JSON.stringify(moviesArray))
    copy.sort( (a, b) => a.title.localeCompare(b.title))
    return copy.map(movie => movie.title).splice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copy = JSON.parse( JSON.stringify (moviesArray) )
    copy.forEach( movie => movie.duration = changeTimeFormatToMinutes(movie.duration) )
    return copy
}

function changeTimeFormatToMinutes( timeString ){
    let hours
    let minutes
    if( timeString.indexOf('h') < 0 ){
        hours = 0
        minutes = Number( timeString.substring( 0, timeString.indexOf('m') ) )
    }else{
        hours = Number( timeString.substring( 0, timeString.indexOf('h') ) )
        minutes = timeString.indexOf('m')<0 ? 0 : Number( timeString.substring( timeString.indexOf('h') + 2, timeString.indexOf('m') ) )
    }
    return hours * 60 + minutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if( moviesArray.length === 0 ){
      return null
    }

    const helperYearScoresArray = []
    moviesArray.forEach( movie => {
        if( !helperYearScoresArray[movie.year] ){
            helperYearScoresArray[movie.year] = [movie.score]
        }else{
            helperYearScoresArray[movie.year].push(movie.score)
        }
    })

    const res = []
    for( key in helperYearScoresArray ){
        res.push( [ key, arrAvg( helperYearScoresArray[key] ) ] )
    }
    res.sort( (a, b) => b[1]-a[1])
    return `The best year was ${res[0][0]} with an average score of ${res[0][1]}`
}

function arrAvg( arr ){
  return arr.reduce( (sum, el ) => sum+el, 0) / arr.length
}





// function cleanArray(arr){
//     const uniqueArr = []
//     arr.forEach( el => {
//         if ( !uniqueArr.includes(el) ){
//             uniqueArr.push(el)
//         }
//     })
//     return uniqueArr
// }

// function equalObjects( a, b ){

// }


// function getUniqueDirectors() {
//     return cleanArray(movies)
// }




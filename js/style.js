const Movies = [
    {
        name: "Legend Hanuman",
        poster: "https://media-cache.cinematerial.com/p/500x/sxgbwjx9/the-legend-of-hanuman-indian-movie-poster.jpg?v=1662526032",
        rating: 10.7
    },
    {
        name: "Avengers Endgame",
        poster: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
        rating: 8
    },
    {
        name: "Oppenheimer",
        poster: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg",
        rating: 9
    },
    {
        name: "Moon light",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDAj-JFEB5nNek2iBfFMt0mmCGmsWZM6YNg&usqp=CAU",
        rating: 3
    },
    {
        name: "Boheman",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFs5CHOnVH_hQvN4tbG4tFx0mvuOiV92gNg&usqp=CAU",
        rating: 8
    },
    {
        name: "john wick",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_z01DebWUB_wEJ2hty-9-wz-2UeiBQyRoA&usqp=CAU",
        rating: 5
    },
    {
        name: "Maleficient",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2_zWAhe7nj9EgzJtNm0Y5hCPN0eRleGm1Q&usqp=CAU",
        rating: 4
    },
    {
        name: "Avatar",
        poster: "https://c8.alamy.com/comp/BGMMYM/avatar-year-2009-director-james-cameron-movie-poster-usa-BGMMYM.jpg",
        rating: 7.7
    }
]



function searchMovie(){
    let movieName = document.getElementById('inputValue').value
    if (movieName !== ""){
        let result = Movies.filter(function(movie)
        {
            return movie.name.toLowerCase().includes(movieName.toLowerCase())
        })
        displayMovies(result);
        }else{
            displayMovies(Movies);
        }
}
function displayMovies(data){
    document.getElementById('movies-display').innerHTML = '';
    let htmlString = ``;
    for (let i=0;i<data.length;i++){
        htmlString = htmlString+`
        <div class="card p-2 m-3">
        <img src="${data[i].poster}">
        <div class="movie-detail">
            <p class="">${data[i].name}</p>
            <p class=""> Rating: ${data[i].rating}</p>
            <p class="fst-italic">Describtion: this movie is about inspiration and directed in india</p>
        </div>
    </div>
        `
    }
    document.getElementById('movies-display').innerHTML = htmlString;
}

displayMovies(Movies);
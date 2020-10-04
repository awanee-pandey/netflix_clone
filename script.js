window.onload = () =>  {
    getOriginalMovie();
    getTrendingMovies();
    getTopratedMovies();

}

function fetchMovies(url,element_selector,path_type){
    fetch(url)
    .then((response)=>{
        if (response.ok) {
            console.log(response)
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    })
    .then((data)=>{
        console.log(data);
        showMovies(data,element_selector,path_type);
    })
    .catch((error_data)=>{
        console.log(error_data);
    })
}

// Add movies to the front end
function showMovies(movies,element_selector,path_type){
    // Add img element to original__movies element
    var moviesEl = document.querySelector(element_selector);
    for(var movie of movies.results){
        var image = `
            <img src="https://image.tmdb.org/t/p/original${movie[path_type]}"></img>
        `
        moviesEl.innerHTML += image;
    }
}


function getOriginalMovie(){
    var url ='https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';
    fetchMovies(url,"#originals",'poster_path');
}

function getTrendingMovies(){
    var url = "https://api.themoviedb.org/3/trending/movie/day?api_key=19f84e11932abbc79e6d83f82d6d1045";
    fetchMovies(url,"#trend",'backdrop_path');
    
}

function getTopratedMovies(){
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=947b0f0af52c9b74afa43eed2267820d&language=en-US";
    fetchMovies(url,"#topRated",'backdrop_path');
}


/*width: 200px;   
 height: 112px;    
 background-size: cover;    
 background-position: center;*/

function getgenre(){
 var genre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US';
 fetchMovies()

}

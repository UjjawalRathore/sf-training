let data

import('/src/moviesPlay.js')
.then(res => {
	console.log('data imported into data constant');
	data = res;
	run()
});

function run() {
    
    const filteredMovies = data.movies.filter(movie => {
        return movie.runtimeMinutes > 150;
    })
    const totalRuntime = filteredMovies.reduce((acc, movie) => {
        console.log(movie.runtimeMinutes);
        return acc + movie.runtimeMinutes;
    }, 0)

    console.log('Total Runtime: ' + totalRuntime + ', avg runtime: ' + Math.floor(totalRuntime/filteredMovies.length))

    //Reformate the filtered output
    const output = filteredMovies.map(movie => {
        return {
            title: movie.title,
            releaseDate: movie.releaseDate,
            runtimeMinutes: movie.runtimeMinutes,
            id: movie.tmdbId
        }
    })
    console.log(output)
}
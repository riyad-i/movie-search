

export default function MovieDisplay(props){

    const {movie} = props

    const noMovie= () => {
        return (
            <>
            <h3>No Movie</h3>
            </>
        )
        }
    
    const yesMovie = () => {
        return(
            <>
            <h4>{movie.Title}</h4>
            <h4>{movie.Year}</h4>
            <h4>{movie.Genre}</h4>
            {movie.Poster == 'N/A'? null: <img src={movie.Poster} alt={movie.Title}/> }
            <h4>{movie.Plot}</h4>
            </>
        )
    }




    return (
        <>
        <h1>Movie Display</h1>
        {movie? yesMovie(): noMovie()}
        </>
    )
}
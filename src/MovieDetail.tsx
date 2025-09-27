import { useParams } from "react-router";

function MovieDetail(){
    const { movieId} = useParams();

    return (
    <div> 
        <h1>映画詳細ページ</h1>
        <div>{movieId}</div>
    </div>)

}

export default MovieDetail;
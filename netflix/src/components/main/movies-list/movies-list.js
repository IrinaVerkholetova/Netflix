import React from 'react';
import css from './movies-list.module.css';
import { MovieCard } from '../movie-card/movie-card';
import { useNavigate } from 'react-router-dom';
import ToolServices from './../../../helper/services';
import { WrapperMoviesList } from './wrapper-movies-list';

// export const MoviesList = ({ list, genre }) => {
//   const navigate = useNavigate();

//   const moviesFilted = ToolServices.moviesFilted(list, genre);

//   return (
//     <>
//       <div className={css.result}>
//         {moviesFilted?.length ? (
//           <span>
//             <b>{moviesFilted.length}</b> movies found
//           </span>
//         ) : (
//           <span>Not results found</span>
//         )}
//       </div>

//       {!!moviesFilted?.length && (
//         <ul className={css.container}>
//           {moviesFilted.map((item) => {
//             return (
//               <li
//                 key={item.id}
//                 className={css.card}
//                 onClick={(event) => {
//                   // event.stopPropagation();
//                   navigate(`/aboutmovie/${item.id}`);
//                 }}
//               >
//                 <MovieCard movie={item} />
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </>
//   );
// };

export class MoviesList extends React.Component {
  render() {
    const { moviesFilted, navigate } = this.props;
    return (
      <>
        <div className={css.result}>
          {moviesFilted?.length ? (
            <span>
              <b>{moviesFilted.length}</b> movies found
            </span>
          ) : (
            <span>Not results found</span>
          )}
        </div>

        {!!moviesFilted?.length && (
          <ul className={css.container}>
            {moviesFilted.map((item) => {
              return (
                <li
                  key={item.id}
                  className={css.card}
                  onClick={() => {
                    navigate(`/aboutmovie/${item.id}`);
                  }}
                >
                  <MovieCard movie={item} />
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

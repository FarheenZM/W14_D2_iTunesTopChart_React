import React from 'react';

const SongsList = (props) => {
  const allSongs = props.songs.map((song, index) => {
    return (
      <p>{song.title.label}</p>
    )

  });

  return(
    <div>
      {allSongs}
    </div>

  )
}

export default SongsList;

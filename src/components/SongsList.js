import React from 'react';
import Song from './Song.js'

const SongsList = (props) => {
  const allSongs = props.songs.map((song, index) => {
    return (
      <Song key={index} position={index+1} song={song}/>
    )
  });

  return(
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Position</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Song Preview</th>
        </tr>
        {allSongs}
      </tbody>
    </table>
  )
}

export default SongsList;

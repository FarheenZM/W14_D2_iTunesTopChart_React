import React, {Component} from "react";

const Song = (props) => {
  return(

    <tr>
      <td><img src={props.song["im:image"][2]["label"]}/></td>
      <td>{props.position}</td>
      <td>{props.song["im:name"]["label"]}</td>
      <td>{props.song["im:artist"]["label"]}</td>
      <td><a href={props.song["im:collection"]["link"]["attributes"]["href"]}>{props.song["im:collection"]["im:name"]["label"]}</a></td>
      <td>
        <audio controls>
          <source src={props.song["link"][1]["attributes"]["href"]}/>
        </audio>
      </td>
    </tr>

  )
}

export default Song;

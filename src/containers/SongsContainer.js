import React, {Component} from 'react';
import SongsList from '../components/SongsList.js'

class SongsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(songs => this.setState({songs: songs["feed"]["entry"]})); //accessing hash elements using this syntax
    // could have also done songs.feed.entry
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">UK top 20 songs</div>
        <SongsList songs={this.state.songs}/>
      </React.Fragment>

    );
  }
}

export default SongsContainer;

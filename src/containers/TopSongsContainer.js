import React, {Component} from 'react';
import SongsList from '../components/SongsList.js'

class TopSongsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(songs => this.setState({songs: songs.feed.entry}));
  }

  render() {
    return (
      <React.Fragment>
        <h1>UK top 20 songs</h1>
        <SongsList songs={this.state.songs}/>
      </React.Fragment>

    );
  }
}

export default TopSongsContainer;

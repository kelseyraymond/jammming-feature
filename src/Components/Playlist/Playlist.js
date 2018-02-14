import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

let userPlaylistName;

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userPlaylistName: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    // this handles changes to the playlistName input field.
    // new feature: updating the button to display the playlistName
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
        var newUserPlaylistName = this.refs.userPlaylistName.value;
        console.log(newUserPlaylistName);
        this.setState({
            userPlaylistName: newUserPlaylistName
        });
        console.log(this.state.userPlaylistName);
    }

    render() {
        return (
            <div className="Playlist">
              <input 
                value={this.props.name}
                onChange={this.handleNameChange}
                ref="userPlaylistName" />
              <TrackList 
                tracks={this.props.playlistTracks}
                onRemove={this.props.onRemove}
                isRemoval={true} />
              <a
                className="Playlist-save"
                onClick={this.props.onSave}>
                Save { this.state.userPlaylistName && 
                    <em>{this.state.userPlaylistName}</em> } To Spotify</a>
            </div>
        )
    }
}

export default Playlist;
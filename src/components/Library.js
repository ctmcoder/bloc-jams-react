import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component { 
  constructor(props) {
     super(props);
     this.state = { albums: albumData };
  }



   render() {
    return ( 
    
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
          
            {this.state.albums.map((album, index) => (
              <Link to={`/album/${album.slug}`} key={index}>
                <img src={album.albumCover} className="card-image-top" />
                <div className="card-body">
                  <h5 className="card-title">{album.title}</h5>
                  <p className="card-text">{album.artist}</p>
                  <p className="card-text">{album.songs.length} songs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="col-sm-6">
            {this.state.albums.map((album, index) => (
              <Link to={`/album/${album.slug}`} key={index}>
                <img src={album.albumCover} className="card-image-top" />
                <div className="card-body">
                  <h5 className="card-title">{album.title}</h5>
                  <p className="card-text">{album.artist}</p>
                  <p className="card-text">{album.songs.length} songs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
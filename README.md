# Apple-Music-Playlist
[![license](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Blackhawk-TA/apple-music-playlist/blob/master/LICENSE.md)
[![github](https://img.shields.io/github/package-json/v/Blackhawk-TA/apple-music-playlist.svg?color=brightgreen)](https://github.com/Blackhawk-TA/apple-music-playlist/tree/master)
[![npm](https://img.shields.io/npm/v/apple-music-playlist.svg?color=brightgreen)](https://www.npmjs.com/package/apple-music-playlist)
[![Build Status](https://travis-ci.com/Blackhawk-TA/apple-music-playlist.svg?branch=master)](https://travis-ci.com/Blackhawk-TA/apple-music-playlist)
[![Coverage Status](https://coveralls.io/repos/github/Blackhawk-TA/apple-music-playlist/badge.svg?branch=master)](https://coveralls.io/github/Blackhawk-TA/apple-music-playlist?branch=master)

### What is Apple-Music-Playlist?
It is a small npm module which allows getting the playlist information of an apple music playlist by its URL.
The informations contains the title, artist and album of each track.

### Usage
```js
const appleMusicPlaylist = require("apple-music-playlist");

let sUrl = "https://music.apple.com/de/playlist/<your playlist>";

appleMusicPlaylist.getPlaylist(sUrl).then(aResult => {
	console.log(aResult);
}).catch(err => {
	throw err;
});
```

### Result
The function returns an array with following structure:
```js
let aResult = [
	{
		"album": "the album of the track",
		"artist": "the artist of the track",
		"title": "the title of the track"
	}
];
```

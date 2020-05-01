# Apple-Music-Playlist
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

const cheerio = require("cheerio");
const axios = require("axios");

module.exports = {
	/**
	 * Get the apple music playlist and returns an array of objects with an album, artist and title property
	 * @param {string} url The url to the apple music playlist
	 * @return {Promise<object[]>} The playlist array
	 */
	getPlaylist: function(url) {
		return new Promise((resolve, reject) => {
			if (!url) {
				reject(new Error("Playlist url is undefined"));
			} else {
				axios.get(url).then(res => {
					let $ = cheerio.load(res.data),
						aTitleDivs = $(".song-name").toArray(),
						aArtistDivs = $(".dt-link-to").toArray(),
						aPlaylist = [],
						i,
						j = 0;

					for (i = 0; i < aTitleDivs.length; i++) {
						aPlaylist.push({
							album: aArtistDivs[j + 1].firstChild.data,
							artist: aArtistDivs[j].firstChild.data,
							title: aTitleDivs[i].lastChild.data
						});
						j += 2;
					}

					resolve(aPlaylist);
				}).catch(err => {
					reject(err);
				});
			}
		});
	}
};

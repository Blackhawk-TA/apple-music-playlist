const amply = require("./../src/main");
const assert = require("assert");

describe("The main module", function() {
	describe("The function getPlaylist", function() {
		this.timeout(5000);

		it("Resolves the promise with the album, artist and title in an array as result", function() {
			//Arrange
			let sPlaylistUrl = "https://music.apple.com/de/playlist/test/pl.u-RRbV0XNsxa2oq6",
				aExpectedResult = [{
					album: "This Is War (feat. Richard Farrell) - Single",
					artist: "Matthew Raetzel",
					title: "This Is War (feat. Richard Farrell)"
				}, {
					album: "Inception (Music from the Motion Picture)",
					artist: "Hans Zimmer",
					title: "Time"
				}];

			//Act
			return amply.getPlaylist(sPlaylistUrl).then(aResult => {
				//Assert
				assert.deepStrictEqual(aResult, aExpectedResult, "The returned playlist is correct.");
			});
		});

		it("Resolves the promise with an empty array if the url is incorrect", function() {
			//Arrange
			let sPlaylistUrl = "https://music.apple.com/wrong-playist-ul",
				aExpectedResult = [];

			//Act
			return amply.getPlaylist(sPlaylistUrl).then(aResult => {
				//Assert
				assert.deepStrictEqual(aResult, aExpectedResult, "The returned playlist is empty.");
			});
		});

		it("Rejects the promise with an error if the url is empty", function() {
			//Arrange
			let sPlaylistUrl = "",
				sExpectedError = "Error: Playlist url is undefined";

			//Act
			return amply.getPlaylist(sPlaylistUrl).catch(err => {
				//Assert
				assert.strictEqual(err.toString(), sExpectedError, "The correct error message is returned.");
			});
		});

		it("Rejects the promise with an error if get request fails", function() {
			//Arrange
			let sPlaylistUrl = "some invalid url",
				sExpectedError = "Error: connect ECONNREFUSED 127.0.0.1:80";

			//Act
			return amply.getPlaylist(sPlaylistUrl).catch(err => {
				//Assert
				assert.strictEqual(err.toString(), sExpectedError, "The correct error message is returned.");
			});
		});
	});
});

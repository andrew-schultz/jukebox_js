

function Song(title, artist, url){
	this.title = document.getElementById("songTitle").value,
	this.artist = document.getElementById("songArtist").value,
	this.url = document.getElementById("addSong").value
}



var Jukebox = function(){
	// Thanks mozilla developer guides for helping with the syntax!

	// sets an empty array equal to "songs", will be where we store all the songs
	this.songs = [];

	var a = document.getElementsByTagName("audio")[0];
	
	// when called will play the selected audio file
	this.play = function(){
		a.play();
		display.innerHTML = (this.songs[i].title)
	},

	// when called will pause the selected audio file
	this.pause = function(){
		a.pause();
	},

	this.volumeUp = function(){
	// when called will raise the volume
		a.volume+=0.3
	},

	this.volumeDown = function(){
	// when called will lower the volume
		a.volume-=0.3
	}


	this.addSong = function(i){
	// adds song selected (file) to the songs array
		url = document.getElementById("addSong").value
		Song.apply(this, arguments)
		i = new Song()
		this.songs.push(i)
	
	}

	var song = document.getElementById('song');


	// set a variable equal to the whats currently playing
	// when you click next, make that variable go up by 1
	// have that correspond to the the next item in the songs.array


	// 'i' is serving as a stand in for current_song in this case
	var i = 0;

	this.next = function(){	
		if(i < this.songs.length - 1){
			i +=1;
		} else {
			i = 0
		};
		console.log(i);
		song.setAttribute("src", this.songs[i].url);
		display.innerHTML = (this.songs[i].title);
		a.play();
	}

	this.previous = function(){
		if(i > 0 ){
			i -= 1;
		} else {
			i = this.songs.length - 1;
		};
		console.log(i);
		song.setAttribute("src", this.songs[i].url);
		display.innerHTML = (this.songs[i].title);
		a.play();
	}

	this.random = function(){
		var random = Math.floor((Math.random() * this.songs.length));
		song.setAttribute("src", this.songs[random].url);
		display.innerHTML = (this.songs[random].title);
		a.play();
	}

	var display = document.getElementById("display");
}

// for making a queue: need to create a new element and then append it to whevere you want it to go

var jukebox = new Jukebox;


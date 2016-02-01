

function Song(title, artist, url){
	this.title = document.getElementById("songTitle").value,
	this.artist = document.getElementById("songArtist").value,
	this.url = document.getElementById("addSong").value
}

function Bong(title, artist, url){
	this.title = title,
	this.artist = artist,
	this.url = url
}

var Jukebox = function(){
	// Thanks mozilla developer guides for helping with the syntax!

	// sets an empty array equal to "songs", will be where we store all the songs
	this.songs = [];
	// 'i' is serving as a stand in for current_song in this case
	var i = 0;
	var a = document.getElementsByTagName("audio")[0];
	var list = document.getElementById("list");
	var p = document.getElementById("play");
	var s = document.getElementById("pause");
	var display = document.getElementById("display");
	var song = document.getElementById('song');
	var idnum = 0;
	var leng = song.duration;
	var autoplay = true;


	// if (autoplay == true) {
	// 	if (song.currentTime == song.duration) {
	// 		if(i < this.songs.length - 1){
	// 			i +=1;
	// 		} else {
	// 			i = 0
	// 		};
	// 	}
	// }
	this.autoplay = function(){
		if (autoplay == true) {
			if (song.currentTime == song.duration) {
				if(i < this.songs.length - 1){
					i +=1;
				} else {
					i = 0
				};
			}
		}
	},

	// when called will play the selected audio file
	this.play = function(){
		a.play();
		p.className = "hide";
		s.className = "";
		displayT.innerHTML = (this.songs[i].title);
		displayA.innerHTML = (this.songs[i].artist);
		this.autoplay();
		this.time(song.duration);
		
	},

	// when called will pause the selected audio file
	this.pause = function(){
		a.pause();
		p.className = "";
		s.className = "hide";
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
		Song.apply(this, arguments)
		i = new Song()
		this.songs.push(i)

		var li = document.createElement("LI");
		// creates an li node
		var title = document.createTextNode((document.getElementById("songTitle").value) + ", " + (document.getElementById("songArtist").value));
		// creates the text "node" for title and artist to go within the li
		var iq = li.setAttribute("id", idnum);
		// creates an idea for the li equal to the elements location in the list
		var zi = li.id;
		li.setAttribute("class", "plsong");
		li.setAttribute("onclick", "jukebox.jump(" + zi + ")");
		li.appendChild(title);
		// adds the title and artist to the li
		document.getElementById("list").appendChild(li);
		// appends the li to the end of the ul with the id list
		idnum += 1;
	}

	this.preload = function(x){
		this.songs.push(x)

		var li = document.createElement("LI");
		// creates an li node
		var title = document.createTextNode((x.title) + ", " + (x.artist));
		// creates the text "node" for title and artist to go within the li
		var iq = li.setAttribute("id", idnum);
		var zi = li.id;
		li.setAttribute("class", "plsong");
		li.setAttribute("onclick", "jukebox.jump(" + zi + ")");
		
		li.appendChild(title);
		// adds the title and artist to the li
		document.getElementById("list").appendChild(li);
		// appends the li to the end of the ul with the id list

		idnum += 1;
	}
	
	this.jump = function(par){
		i = par;
		song.setAttribute("src", this.songs[par].url);
		displayT.innerHTML = (this.songs[par].title);
		displayA.innerHTML = (this.songs[par].artist);
		this.time(leng);
		a.play();
		p.className = "hide";
		s.className = "";
	}

	this.next = function(){	
		if(i < this.songs.length - 1){
			i +=1;
		} else {
			i = 0
		};
		console.log(i);
		song.setAttribute("src", this.songs[i].url);
		displayT.innerHTML = (this.songs[i].title);
		displayA.innerHTML = (this.songs[i].artist);
		this.time(leng);
		p.className = "hide";
		s.className = "";
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
		displayT.innerHTML = (this.songs[i].title);
		displayA.innerHTML = (this.songs[i].artist);
		this.time(leng);
		p.className = "hide";
		s.className = "";
		a.play();
	}

	this.random = function(){
		var random = Math.floor((Math.random() * this.songs.length));
		i = random
		song.setAttribute("src", this.songs[i].url);
		displayT.innerHTML = (this.songs[i].title);
		displayA.innerHTML = (this.songs[i].artist);
		this.time(leng);
		a.play();
		p.className = "hide";
		s.className = "";
	}

	this.time = function(){
		// sets the div with the id (progress)to a variable
		var prog = document.getElementById("prog");
		// sets a variable (width) to 0
		var barwidth = 0;		
		// checks to see if the currentTime of the song is less than the total length of the song
		// if it is, it runs the function and updates the width of the progress bar div
		if (song.currentTime < song.duration) {
			setInterval(function bar(){
				// runs this function every second
				console.log(song.currentTime);
				barwidth = (song.currentTime/song.duration)*100;
				// sets the width of the progress bar equal to the currentTIme of the song divided by duration of the song, multiplied by 100
				prog.style.width = barwidth + '%';
				// sets the width attribute equal to the width variable as a percent
			}, 1000);
		} else  {
			this.break;
		}
	}	
}

first = new Bong("Fire on the Mountain", "Grateful Dead", "https://ia802608.us.archive.org/3/items/gd1977-05-08.shure57.stevenson.29303.flac16/gd1977-05-08d02t05.mp3");
sec = new Bong("Estimated Prophet", "Grateful Dead", "https://ia802608.us.archive.org/3/items/gd1977-05-08.shure57.stevenson.29303.flac16/gd1977-05-08d02t06.mp3");
third = new Bong("Nemo", "Umphrey's McGee", "https://ia902608.us.archive.org/14/items/um2004-02-07.shnf/um2004-02-07d2t05.mp3");
four = new Bong("Hook", "Blues Traveler", "https://ia700401.us.archive.org/20/items/bt2006-05-12.flac16/bt2006-05-12d1t07.mp3");
five = new Bong("One Big Holiday", "My Morning Jacket", "https://ia802205.us.archive.org/34/items/mmj2008-06-13.140v3.flacf16/mmj2008-06-13d2t06.mp3");
six = new Bong("Wordless Chorus", "My Morning Jacket", "https://ia802205.us.archive.org/34/items/mmj2008-06-13.140v3.flacf16/mmj2008-06-13d3t05.mp3");
seven = new Bong("El Ron", "Soulive", "https://ia600307.us.archive.org/33/items/Soulive2006-07-08..flac16/Soulive2006-07-08d1t03.mp3");
eight = new Bong("Fireworks", "Animal Collective", "https://archive.org/details/acollective2009-01-21.nyctaper.Neumann_KM150.16bit");
nine = new Bong("The Night They Drove Old Dixie Down", "Trampled by Turtles", "https://ia800305.us.archive.org/22/items/tbt2015-05-02/tbt2015-05-02d01t21.mp3");
ten = new Bong("Fall of the American Empire", "State Radio", "https://ia600302.us.archive.org/34/items/sr2006-11-15.mbhoka100dk.mp2sbd.flac16/sr2006-11-15d1t02.mp3");
eleven = new Bong("Mr. Larkin", "State Radio", "https://ia800302.us.archive.org/34/items/sr2006-11-15.mbhoka100dk.mp2sbd.flac16/sr2006-11-15d2t10.mp3");


var jukebox = new Jukebox;

jukebox.preload(first);
jukebox.preload(sec);
jukebox.preload(third);
jukebox.preload(four);
jukebox.preload(five);
jukebox.preload(six);
jukebox.preload(seven);
jukebox.preload(eight);
jukebox.preload(nine);
jukebox.preload(ten);
jukebox.preload(eleven);


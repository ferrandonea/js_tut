var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "formats":  [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // add record here
    {
        "artist" : "Jhon Smith",
        "title" : "Serial Men",
        "release_year" : 2003,
        "formats":  [
            "Youtube",
            "MP3"
        ]
    }
];

var musicTitleObject = myMusic[0].artist
console.log(musicTitleObject);
console.log(myMusic[0]["formats"][1])
const Spotify = require('spotify-web-api-js');
const s = new Spotify();

spotifyApi.setAccessToken('763cbbe859d04dd0abab01b61f01aeb1');



//s.searchTracks()...


// get albums by artist example

// // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
//     if (err) console.error(err);
//     else console.log('Artist albums', data);
//   });
  
//   // get Elvis' albums, using Promises through Promise, Q or when
//   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//     function (data) {
//       console.log('Artist albums', data);
//     },
//     function (err) {
//       console.error(err);
//     }
//   );


// The promises also expose an abort method that aborts the XMLHttpRequest. This is useful to cancel requests that were made earlier and could be resolved out-of-sync:


// var prev = null;

// function onUserInput(queryTerm) {
//     // abort previous request, if any
//     if (prev !== null) {
//       prev.abort();
//     }
  
//     // store the current promise in case we need to abort it
//     prev = spotifyApi.searchTracks(queryTerm, { limit: 5 });
//     prev.then(
//       function (data) {
//         // clean the promise so it doesn't call abort
//         prev = null;
  
//         // ...render list of search results...
//       },
//       function (err) {
//         console.error(err);
//       }
//     );
//   }



// Note: The following examples use Promises/Q/when as the return object.
// Here you can see more examples of the usage of this wrapper:

// // search tracks whose name, album or artist contains 'Love'
// spotifyApi.searchTracks('Love').then(
//     function (data) {
//       console.log('Search by "Love"', data);
//     },
//     function (err) {
//       console.error(err);
//     }
//   );
  
//   // search artists whose name contains 'Love'
//   spotifyApi.searchArtists('Love').then(
//     function (data) {
//       console.log('Search artists by "Love"', data);
//     },
//     function (err) {
//       console.error(err);
//     }
//   );
  
//   // search tracks whose artist's name contains 'Love'
//   spotifyApi.searchTracks('artist:Love').then(
//     function (data) {
//       console.log('Search tracks by "Love" in the artist name', data);
//     },
//     function (err) {
//       console.error(err);
//     }
//   );


// Nesting calls
// When you need to make multiple calls to get some dataset, you can take advantage of the Promises to get a cleaner code:

// // track detail information for album tracks
// spotifyApi
//   .getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
//   .then(function (data) {
//     return data.tracks.map(function (t) {
//       return t.id;
//     });
//   })
//   .then(function (trackIds) {
//     return spotifyApi.getTracks(trackIds);
//   })
//   .then(function (tracksInfo) {
//     console.log(tracksInfo);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// // album detail for the first 10 Elvis' albums
// spotifyApi
//   .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10 })
//   .then(function (data) {
//     return data.albums.map(function (a) {
//       return a.id;
//     });
//   })
//   .then(function (albums) {
//     return spotifyApi.getAlbums(albums);
//   })
//   .then(function (data) {
//     console.log(data);
//   });
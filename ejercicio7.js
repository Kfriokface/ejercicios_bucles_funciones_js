// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

// Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const orderedTracks = {};

tracks.forEach((value) => {
  const genre = value.genre.toLowerCase(); // Igualo 'Rock' y 'rock'.
  const key = genre.charAt(0).toUpperCase() + genre.slice(1); // luego vuelvo a capitalizar la primera letra para usarla como clave.

  if (!orderedTracks[key]) {
    orderedTracks[key] = [];
  }
  orderedTracks[key].push(value.title);
})

console.log(orderedTracks);

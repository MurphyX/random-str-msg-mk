const messages = [
  "Que la fuerza te acompañe -Obi-Wan Kenobi",
  "Yo soy tu padre -Darth Vader",
  "Un mago nunca llega tarde Frodo Bolsón, ni pronto. Llega precisamente cuando se lo propone -Gandalf",
  "No es la carga lo que te hunde, sino la forma en que la llevas -Jack Dawson",
  "La vida es como una caja de chocolates, nunca sabes lo que te va a tocar -Forrest Gump",
  "No hay nada imposible, incluso lo imposible dice 'soy posible' -Alice Kingsleigh",
  "La muerte no es el final, sólo un cambio de estado -Luisa Rey",
  "La verdadera aventura está en el corazón -Hansel",
  "No es quién soy debajo, sino lo que hago lo que me define -Iron Man",
  "La fuerza es poderosa en mi familia, mi padre la tenía, mi hermana la tiene, yo la tengo -Luke Skywalker",
  "No hay nada más fuerte que el corazón de un voluntario -Lt. Col. Frank Slade",
  "La luz es más poderosa que la oscuridad -Princesa Leia",
  "La vida se abre camino -Dr. Ian Malcolm",
  "La esperanza es el primer paso hacia la decepción -Bail Organa",
  "La fe es más fuerte que el miedo -Tris Prior",
  "La verdadera sabiduría está en saber que no sabes nada -Sócrates",
  "La mejor venganza es el éxito masivo -Frank Sinatra",
  "La vida es una aventura, no un destino -Ariel",
  "La vida es corta, el arte es largo -Hippocrates",
  "La vida es una montaña rusa, disfruta del viaje -Ronnie Radke"
];

const movieQuote = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  movieQuote
};
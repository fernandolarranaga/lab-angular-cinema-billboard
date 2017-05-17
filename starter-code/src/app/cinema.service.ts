import { Injectable } from '@angular/core';

@Injectable()
export class CinemaService {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;

  constructor() { }

  Movies : Array<Object> = [
 {
   id: 1,
   title: "Star Wars 7",
   poster: "https://i.blogs.es/26893e/star-wars-7-el-despertar-de-la-fuerza-star-wars-force-awakens-poster-final-grande/450_1000.jpg",
   synopsis: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe. ",
   genres: [ "Action", "Adventure", "Sci-Fi"],
   year: 2015,
   director: "JJ Abrams",
   actors:[ "Daisy Ridley", "John Boyega", "Adam Driver"],
   hours:["Wednesday 19:30"],
   room:1
 },
 {
   id: 2,
   title: "Rogue One",
   poster: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2016/10/rogueone_onesheetA.jpg",
   synopsis: "Lucas Film presenta la primera de las películas independientes de Star Wars, Rogue One: Una historia de Star Wars, una nueva y épica aventura. En un tiempo de conflicto, un grupo de improbables héroes tendrá la misión de robar los planos de la Estrella de la Muerte, la última y destructiva arma del Imperio. Este evento clave en la línea temporal de Star Wars unirá a un grupo de personas ordinarias elegidas para hacer cosas extraordinarias, acabando por formar parte de algo más grande que ellos mismos ",
   genres: [ "Action", "Adventure", "Sci-Fi"],
   year: 2016,
   director: " Gareth Edwards ",
   actors:[ "Felicity Jones", "Diego Luna", "Ben Mendelsohn"],
   hours:["Monday 19:30"],
   room:2
 },
 {
   id: 3,
   title: "Star Wars 8" ,
   poster: "http://cdn.collider.com/wp-content/uploads/2017/04/star-wars-the-last-jedi-teaser-poster.jpg",
   synopsis: "Esta octava entrega de la saga espacial comienza inmediatamente después de los hechos ocurridos al final de Star Wars: El despertar de la fuerza (2015). Se plantean muchas incógnitas para los protagonistas. ¿Se convertirá la joven chatarrera Rey (Daisy Ridley), procedente del planeta Jakku, en Jedi tras ver que es sensible a la Fuerza? ¿Será el legendario Maestro Jedi Luke Skywalker (Mark Hamill), exiliado a un lejano lugar de la galaxia, quien enseñe a Rey los designios de la Fuerza? ¿Cómo afrontará la General de la Resistencia Leia Organa (Carrie Fisher) la muerte de Han Solo a manos de su hijo Ben Solo, convertido en Kylo Ren (Adam Driver), líder de los Caballeros de la Primera Orden? ¿Qué harán ahora el talentoso píloto de la Resistencia Poe Dameron (Oscar Isaac) y Finn (John Boyega), el ex-soldado de asalto que está libre de las garras de la Primera Orden? ",
   genres: ["Adventure", "Sci-Fi", "Sci-Fi" ],
   year: 1993,
   director: "Rian Johnson",
   actors:[ "Daisy Ridley", "John Boyega", "Adam Driver"],
   hours:["Friday 19:30"],
   room:1
 },
 {
   id: 4,
   title: "Star Wars III, La venganza de los Sith",
   poster: "http://es.web.img2.acsta.net/medias/nmedia/18/89/75/58/20065302.jpg",
   synopsis: "Tres años después del inicio de las Guerras Clon, los nobles Caballeros Jedi han liderado un enorme ejército clon en batallas a través de la galaxia contra la Confederación de Sistemas Independientes. El Canciller de la República Galáctica revela su verdadera identidad como un Lord Sith y revelando también un complot para gobernar la galaxia transformando la República en un Imperio Galáctico. El héroe Jedi Anakin Skywalker es seducido por el lado oscuro de la Fuerza para convertirse en el nuevo aprendiz de Darth Sidious, renacido como Darth Vader. Los Jedi son casi eliminados, forzando a Obi-Wan Kenobi y al Maestro Jedi Yoda entrar en exilio. La única esperanza de la galaxia son los propios descendientes de Anakin – los gemelos nacidos en secreto quien crecerían para convertirse en Luke Skywalker y Leia Organa. ",
   genres: ["Adventure", "Sci-Fi", "Sci-Fi" ],
   year: 2005,
   director: " George Lucas ",
   actors:[ "Ewan McGregor", "Natalie Portman", "Hayden Christensen"],
   hours:["Thursday 19:30"],
   room:3
 },
 {
   id: 5,
   title: "Star Wars V, el Imperio contraataca",
   poster: "http://es.web.img2.acsta.net/r_1280_720/medias/nmedia/18/72/73/89/20535463.jpg",
   synopsis: "La película se refiere a las continuas luchas de la Alianza Rebelde contra el Imperio Galáctico. Durante la película, Han Solo, Chewbacca y la Princesa Leia Organa están siendo perseguidos a través del espacio por Darth Vader y sus fuerzas de elite. Mientras tanto, Luke Skywalker comienza su formación como Jedi con Yoda, después de una instrucción del espíritu de Obi-Wan Kenobi. En un emotivo y casi fatal enfrentamiento con Vader, Luke se presenta con una terrible revelación y debe afrontar su destino.",
   genres: ["Adventure", "Sci-Fi", "Sci-Fi" ],
   year: 2013,
   director: " George Lucas ",
   actors:[ "Mark Hamill", "Harrison Ford", "Carrie Fisher" ],
   hours:["Saturday 19:30"],
   room:4
 },
];

  getMovies(){
    return this.Movies;
  }

  getMovie(movieId){
    let selected = this.Movies.filter(elem => elem['id'] === movieId)
    return selected
  }

}

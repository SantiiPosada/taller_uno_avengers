import { Injectable } from '@angular/core';

@Injectable()
export class AvengersService {
  private avengers: Superheroe[] = [
    {
      nombre: "Anthony Edward Stark",
      alias: " Iron Man",
      especie: "Human",
      nacionalidad: "American",
      fecha_nacimiento: "May 29, 1970",
      frase: "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
      imagen: "assets/vengadores/IronMan.webp",
      me_gusta: 0,
      no_me_gusta: 0
    },
    {
      nombre: "Steven Grant Rogers",
      alias: "Captain America",
      especie: "Human",
      nacionalidad: "American",
      fecha_nacimiento: "July 4, 1918",
      frase: "For as long as I can remember, I just wanted to do what was right. I guess Im not quite sure what that is anymore. And I thought I could throw myself back in and follow orders, serve. Its just not the same."
      , imagen: "assets/vengadores/CapAmerica.webp",
      me_gusta: 0,
      no_me_gusta: 0
    },
    {
      nombre: "Thor Odinson",
      alias: "Thor",
      especie: "Asgardian",
      nacionalidad: "Asgardian",
      fecha_nacimiento: "964 A.D.– 965 A.D.",
      frase: "It's time for me to be who I am, rather than who I'm supposed to be."
      , imagen: "assets/vengadores/Thor.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }, {
      nombre: "Scott Edward Harris Lang",
      alias: " Ant Man",
      especie: "Human",
      nacionalidad: "American",
      fecha_nacimiento: "NA",
      frase: "I do some dumb things and the people that I love the most pay the price. Mainly you."
      , imagen: "assets/vengadores/AntMan.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }, {
      nombre: "Peter Benjamin Parker",
      alias: " Spider Man",
      especie: "Human",
      nacionalidad: "American",
      fecha_nacimiento: "August 10, 2001",
      frase: "Truth is... that this is all my fault. I accidentally brought those dangerous people here. And if those people are watching... just know that I really did try to help you. I mean, I could've killed you. At any given moment, but I didn't. Because my Aunt May taught me that everyone deserves a second chance."
      , imagen: "assets/vengadores/SpiderMan.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }, {
      nombre: "Stephen Vincent Strange",
      alias: "Doctor Strange",
      especie: "Human",
      nacionalidad: "American",
      fecha_nacimiento: "NA",
      frase: "What is your job exactly, besides making balloon animals? Protecting your reality, douchebag."
      , imagen: "assets/vengadores/DoctorStrange.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }, {
      nombre: "Carol Susan Jane Danvers",
      alias: "Captain Marvel",
      especie: "Human / Kree Hybrid",
      nacionalidad: "American Kree Imperial",
      fecha_nacimiento: "Mid - 1960s",
      frase: "I'm coming to end it. The war, the lies, all of it."
      , imagen: "assets/vengadores/CapMarvel.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }, {
      nombre: "T/'Challa",
      alias: "Black Panther",
      especie: "Human",
      nacionalidad: "Wakandan",
      fecha_nacimiento: "NA",
      frase: "My name is King T'Challa, son of King T'Chaka. I am the sovereign ruler of the nation of Wakanda. And for the first time in our history, we will be sharing our knowledge and resources with the outside world."
      , imagen: "assets/vengadores/BlackPanther.webp",
      me_gusta: 0,
      no_me_gusta: 0

    }, {
      nombre: "Loki Laufeyson",
      alias: "Loki",
      especie: "Frost Giant",
      nacionalidad: "Asgardian Jotun",
      fecha_nacimiento: "965 A.D.",
      frase: "I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity."
      , imagen: "assets/vengadores/Loki.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }, {
      nombre: "Natalia Alianovna Romanoff",
      alias: "Black Widow",
      especie: " Human",
      nacionalidad: "Russian",
      fecha_nacimiento: "December 3, 1984",
      frase: "I used to have nothing. And then I got this. This job. This family. And I was better because of it. And even though they're gone... I'm still trying to be better."
      , imagen: "assets/vengadores/BlackWidow.webp",
      me_gusta: 0,
      no_me_gusta: 0
    }

  ]

  getAvengers(): Superheroe[] {
    return this.avengers;
  }
  /**
   * 
   * @param idx La posición en la que está el superheroe en el arreglo
   */
  like(idx: number) {
    let likes: number = this.avengers[idx].me_gusta;
    likes++;
    this.avengers[idx].me_gusta = likes;
  }
  /**
   * 
   * @param idx La posición en la que está el superheroe en el arreglo
   */
  disLike(idx: number) {
    let disLikes: number = this.avengers[idx].no_me_gusta;
    disLikes++;
    this.avengers[idx].no_me_gusta = disLikes;
  }


}


export interface Superheroe {
  nombre: string;
  alias: string;
  especie: string;
  nacionalidad: string;
  fecha_nacimiento: string
  frase: string;
  imagen: String;
  me_gusta: number;
  no_me_gusta: number;
}
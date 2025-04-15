import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [];
  private heroes$ = new BehaviorSubject<Hero[]>([]);

  constructor() {
    this.heroes = [
      {
        id: 1,
        name: "Superman",
        description: "Hombre de acero del planeta Krypton.",
        power: "Fuerza sobrehumana, vuelo, visión láser",
        height: 191,
        weight: 107,
        gender: "Male"
      },
      {
        id: 2,
        name: "Wonder Woman",
        description: "Princesa amazona con poderes divinos.",
        power: "Fuerza, velocidad, resistencia, lazo de la verdad",
        height: 183,
        weight: 75,
        gender: "Female"
      },
      {
        id: 3,
        name: "Batman",
        description: "Detective y maestro estratega de Gotham.",
        power: "Inteligencia, artes marciales, tecnología avanzada",
        height: 188,
        weight: 95,
        gender: "Male"
      },
      {
        id: 4,
        name: "Spiderman",
        description: "Adolescente con habilidades arácnidas.",
        power: "Trepar muros, fuerza, agilidad, sentido arácnido",
        height: 178,
        weight: 76,
        gender: "Male"
      },
      {
        id: 5,
        name: "Storm",
        description: "Controladora del clima, miembro de los X-Men.",
        power: "Manipulación del clima",
        height: 180,
        weight: 70,
        gender: "Female"
      },
      {
        id: 6,
        name: "Flash",
        description: "El hombre más rápido del mundo.",
        power: "Velocidad sobrehumana",
        height: 183,
        weight: 81,
        gender: "Male"
      },
      {
        id: 7,
        name: "Iron Man",
        description: "Genio multimillonario en una armadura de combate.",
        power: "Tecnología avanzada, inteligencia",
        height: 185,
        weight: 102,
        gender: "Male"
      },
      {
        id: 8,
        name: "Captain Marvel",
        description: "Heroína con poder cósmico.",
        power: "Vuelo, fuerza, explosiones de energía",
        height: 180,
        weight: 75,
        gender: "Female"
      },
      {
        id: 9,
        name: "Black Panther",
        description: "Rey de Wakanda con agilidad felina.",
        power: "Fuerza, agilidad, traje vibranium",
        height: 183,
        weight: 91,
        gender: "Male"
      },
      {
        id: 10,
        name: "Scarlet Witch",
        description: "Controla la realidad y la magia del caos.",
        power: "Magia del caos, telequinesis",
        height: 170,
        weight: 59,
        gender: "Female"
      },
      {
        id: 11,
        name: "Green Lantern",
        description: "Usa un anillo que crea todo lo que imagina.",
        power: "Construcción de energía, vuelo",
        height: 185,
        weight: 90,
        gender: "Male"
      },
      {
        id: 12,
        name: "Aquaman",
        description: "Rey de la Atlántida y señor del océano.",
        power: "Comunicación con animales marinos, fuerza",
        height: 188,
        weight: 95,
        gender: "Male"
      },
      {
        id: 13,
        name: "Black Widow",
        description: "Espía y experta en combate cuerpo a cuerpo.",
        power: "Agilidad, inteligencia táctica",
        height: 170,
        weight: 60,
        gender: "Female"
      },
      {
        id: 14,
        name: "Wolverine",
        description: "Mutante con garras retráctiles y curación acelerada.",
        power: "Regeneración, sentidos agudos, garras de adamantium",
        height: 160,
        weight: 135,
        gender: "Male"
      },
      {
        id: 15,
        name: "Doctor Strange",
        description: "Hechicero supremo del universo Marvel.",
        power: "Magia, manipulación del tiempo y espacio",
        height: 182,
        weight: 84,
        gender: "Male"
      },
      {
        id: 16,
        name: "Captain America",
        description: "Super soldado de la Segunda Guerra Mundial.",
        power: "Fuerza, escudo indestructible",
        height: 188,
        weight: 99,
        gender: "Male"
      },
      {
        id: 17,
        name: "Jean Grey",
        description: "Mutante con poderes mentales y telequinesis.",
        power: "Telepatía, telequinesis, Phoenix Force",
        height: 168,
        weight: 56,
        gender: "Female"
      },
      {
        id: 18,
        name: "Rogue",
        description: "Absorbe poderes y memorias al tocar.",
        power: "Absorción de energía vital y habilidades",
        height: 173,
        weight: 68,
        gender: "Female"
      },
      {
        id: 19,
        name: "Cyborg",
        description: "Híbrido humano-máquina con tecnología alienígena.",
        power: "Tecnología avanzada, superfuerza, interfaces electrónicas",
        height: 198,
        weight: 130,
        gender: "Male"
      },
      {
        id: 20,
        name: "Invisible Woman",
        description: "Puede volverse invisible y generar campos de fuerza.",
        power: "Invisibilidad, campos de fuerza",
        height: 170,
        weight: 55,
        gender: "Female"
      },
      {
        id: 21,
        name: "Hawkeye",
        description: "Arquero excepcional sin poderes sobrenaturales.",
        power: "Precisión, combate con arco",
        height: 180,
        weight: 85,
        gender: "Male"
      },
      {
        id: 22,
        name: "Shazam",
        description: "Niño que se convierte en héroe mágico.",
        power: "Fuerza, velocidad, magia",
        height: 190,
        weight: 100,
        gender: "Male"
      },
      {
        id: 23,
        name: "Raven",
        description: "Empática y hechicera oscura de los Teen Titans.",
        power: "Magia oscura, teletransportación",
        height: 170,
        weight: 53,
        gender: "Female"
      },
      {
        id: 24,
        name: "Ant-Man",
        description: "Puede cambiar de tamaño y controlar insectos.",
        power: "Encogimiento, fuerza aumentada, comunicación con hormigas",
        height: 178,
        weight: 80,
        gender: "Male"
      },
      {
        id: 25,
        name: "Ms. Marvel",
        description: "Adolescente con poderes de elasticidad y cambio de forma.",
        power: "Cambio de tamaño, elasticidad",
        height: 165,
        weight: 60,
        gender: "Female"
      },
      {
        id: 26,
        name: "Beast",
        description: "Mutante con fuerza sobrehumana e inteligencia brillante.",
        power: "Fuerza, agilidad, intelecto",
        height: 180,
        weight: 180,
        gender: "Male"
      },
      {
        id: 27,
        name: "Starfire",
        description: "Princesa alienígena con poder estelar.",
        power: "Explosiones de energía, vuelo",
        height: 183,
        weight: 75,
        gender: "Female"
      },
      {
        id: 28,
        name: "Nova",
        description: "Miembro del Cuerpo Nova con poder cósmico.",
        power: "Vuelo, energía cósmica",
        height: 185,
        weight: 86,
        gender: "Male"
      },
      {
        id: 29,
        name: "Daredevil",
        description: "Ciego con sentidos hiperdesarrollados.",
        power: "Sentidos mejorados, artes marciales",
        height: 182,
        weight: 90,
        gender: "Male"
      },
      {
        id: 30,
        name: "She-Hulk",
        description: "Prima de Hulk con fuerza increíble y control emocional.",
        power: "Fuerza sobrehumana, inteligencia",
        height: 200,
        weight: 130,
        gender: "Female"
      }
    ]
    this.heroes$.next(this.heroes);
  }

  getAllHeroes() {
    return this.heroes$.asObservable();
  }

  getById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }

  searchHeroByName(query: string): Hero[] {
    return this.heroes.filter(hero =>
      hero.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  createNewHero(hero: Hero) {
    hero.id = this.generateHeroId();
    this.heroes.push(hero);
    this.heroes$.next(this.heroes);
  }

  editHero(editHero: Hero) {
    const index = this.heroes.findIndex(h => h.id === editHero.id);
    if (index !== -1) {
      this.heroes[index] = editHero;
      this.heroes$.next(this.heroes);
    }
  }

  removeHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
    this.heroes$.next(this.heroes);
  }

  private generateHeroId(): number {
    return this.heroes.length ? Math.max(...this.heroes.map(h => h.id)) + 1 : 1;
  }
}

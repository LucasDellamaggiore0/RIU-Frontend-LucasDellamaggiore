import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from '../models/hero.model';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get hero by id', () => {
    const hero = service.getById(1);
    expect(hero).toBeTruthy();
    expect(hero?.id).toBe(1);
    expect(hero?.name).toBe('Superman');
  })

  it('should return undefined if hero id does not exist', () => {
    const hero = service.getById(999);
    expect(hero).toBeUndefined();
  });

  it('should search heroes by name', () => {
    const result = service.searchHeroByName('Wonder');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Wonder Woman');
  });

  it('should return an empty array when no heroes match the search', () => {
    const result = service.searchHeroByName('Nonexistent Hero');
    expect(result.length).toBe(0);
  });

  it('should create a new hero', () => {
    const newHero: Hero = {
      id: 0,
      name: 'Hulk',
      description: 'El hombre verde de fuerza increíble',
      power: 'Fuerza sobrehumana',
      height: 220,
      weight: 250,
      gender: 'Masculino'
    };
    service.createNewHero(newHero);
    const createdHero = service.getById(newHero.id);
    expect(createdHero).toBeTruthy();
    expect(createdHero?.name).toBe('Hulk');
  });

  it('should edit an existing hero', () => {
    const editedHero: Hero = {
      id: 1,
      name: 'Superman Edited',
      description: 'Superhéroe con poderes mejorados',
      power: 'Fuerza, vuelo, visión láser mejorada',
      height: 200,
      weight: 110,
      gender: 'Masculino'
    };
    service.editHero(editedHero);
    const updatedHero = service.getById(1);
    expect(updatedHero).toBeTruthy();
    expect(updatedHero?.name).toBe('Superman Edited');
  });


  it('should generate a new hero ID correctly', () => {
    const heroId = service['generateHeroId']();
    expect(heroId).toBeGreaterThan(0);
  });
});

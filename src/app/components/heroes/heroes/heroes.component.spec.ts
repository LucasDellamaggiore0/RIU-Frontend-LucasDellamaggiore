import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../../../services/hero.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Hero } from '../../../models/hero.model';
import Swal from 'sweetalert2';

const mockHeroes: Hero[] = [
  { id: 1, name: 'Batman', description: '', power: '', height: 180, weight: 80, gender: 'Masculino' },
  { id: 2, name: 'Superman', description: '', power: '', height: 190, weight: 90, gender: 'Masculino' },
  { id: 3, name: 'Wonder Woman', description: '', power: '', height: 175, weight: 70, gender: 'Femenino' }
];

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    const heroServiceMock = jasmine.createSpyObj('HeroService', ['getAllHeroes']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HeroesComponent],
      providers: [
        { provide: HeroService, useValue: heroServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    })
      .compileComponents();

    heroServiceSpy = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    heroServiceSpy.getAllHeroes.and.returnValue(of(mockHeroes));

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.heroes = [...mockHeroes];
    component.filteredHeroes = [...mockHeroes];
    component.currentPage = 1;
    component.searchHeroQuery = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load heroes on initialization', () => {
    expect(component.heroes.length).toBe(3);
    expect(component.filteredHeroes.length).toBe(3);
  });

  it('should filter heroes by name', () => {
    component.searchHeroQuery = 'bat';
    component.onSearch();
    expect(component.filteredHeroes.length).toBe(1);
    expect(component.filteredHeroes[0].name).toBe('Batman');
  });

  it('should go to next page if more results exist', () => {
    component.itemsPerPage = 1;
    component.onSearch();
    component.nextPage();
    expect(component.currentPage).toBe(2);
  });

  it('should not go to next page if on last page', () => {
    component.currentPage = 1;
    component.itemsPerPage = 10;
    component.nextPage();
    expect(component.currentPage).toBe(1);
  });

  it('should go back to previous page if currentPage > 1', () => {
    component.currentPage = 2;
    component.prevPage();
    expect(component.currentPage).toBe(1);
  });

  it('should not go back if already on first page', () => {
    component.currentPage = 1;
    component.prevPage();
    expect(component.currentPage).toBe(1);
  });

  it('should open the edit modal with selected hero', () => {
    component.editHero(mockHeroes[0]);
    expect(component.selectedHero).toEqual(mockHeroes[0]);
    expect(component.isEditModalOpen).toBeTrue();
  });

  it('should save updated hero and close the modal', () => {
    const updatedHero = { ...mockHeroes[0], name: 'Batman Updated' };
    component.onSaveEditedHero(updatedHero);
    expect(component.heroes.find(h => h.id === updatedHero.id)?.name).toBe('Batman Updated');
    expect(component.isEditModalOpen).toBeFalse();
  });

  it('should close the edit modal', () => {
    component.isEditModalOpen = true;
    component.selectedHero = mockHeroes[0];
    component.closeEditModal();
    expect(component.isEditModalOpen).toBeFalse();
    expect(component.selectedHero).toBeNull();
  });

  it('should navigate to /add when addHero() is called', () => {
    component.addHero();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/add']);
  });


});

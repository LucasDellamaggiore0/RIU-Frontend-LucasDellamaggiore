import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { Hero } from '../../../models/hero.model';
import { By } from '@angular/platform-browser';
import { UppercaseDirective } from '../../../directives/uppercase.directive';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;
  let editHeroEmitter: EventEmitter<Hero>;
  let removeHeroEmitter: EventEmitter<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCardComponent, UppercaseDirective],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    editHeroEmitter = component.editHero;
    removeHeroEmitter = component.removeHero;


    component.hero = { id: 1, name: 'Superman', power: "Fuerza sobrehumana, vuelo, visión láser", description: "Hombre de acero del planeta Krypton", height: 191, weight: 107, gender: "Masculino" }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit editHero when onEditHero is called', () => {
    spyOn(editHeroEmitter, 'emit'); // Espía la emisión del evento

    component.onEditHero(); // Llama al método onEditHero
    expect(editHeroEmitter.emit).toHaveBeenCalledWith(component.hero); // Verifica que se emitió el evento con el héroe correcto
  });

  it('should emit removeHero when onRemoveHero is called', () => {
    spyOn(removeHeroEmitter, 'emit'); // Espía la emisión del evento

    component.onRemoveHero(); // Llama al método onRemoveHero
    expect(removeHeroEmitter.emit).toHaveBeenCalledWith(component.hero); // Verifica que se emitió el evento con el héroe correcto
  });

  it('should display the hero name in uppercase', () => {
    // Realiza un cambio en el valor de input y detecta los cambios
    component.hero.name = 'batman';
    fixture.detectChanges();

    // Busca el elemento que contiene el nombre del héroe
    const nameElement: DebugElement = fixture.debugElement.query(By.css('.hero-name'));
    expect(nameElement.nativeElement.textContent).toBe('BATMAN'); // Verifica que el nombre se muestra en mayúsculas
  });

  it('should call onEditHero when edit button is clicked', () => {
    spyOn(component, 'onEditHero'); // Espía el método onEditHero

    const button = fixture.debugElement.query(By.css('.edit-button')).nativeElement;
    button.click(); // Simula un clic en el botón de editar

    expect(component.onEditHero).toHaveBeenCalled(); // Verifica que el método fue llamado
  });

  it('should call onRemoveHero when remove button is clicked', () => {
    spyOn(component, 'onRemoveHero'); // Espía el método onRemoveHero

    const button = fixture.debugElement.query(By.css('.remove-button')).nativeElement;
    button.click(); // Simula un clic en el botón de eliminar

    expect(component.onRemoveHero).toHaveBeenCalled(); // Verifica que el método fue llamado
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroFormComponent } from './hero-form.component';
import { Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';



describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    mockHeroService = jasmine.createSpyObj('HeroService', ['createNewHero']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HeroFormComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with required controls', () => {
    const form = component.newHeroForm;
    expect(form.contains('name')).toBeTrue();
    expect(form.contains('description')).toBeTrue();
    expect(form.contains('power')).toBeTrue();
    expect(form.contains('height')).toBeTrue();
    expect(form.contains('weight')).toBeTrue();
    expect(form.contains('gender')).toBeTrue();
  });

  it('should mark form as invalid when required fields are missing', () => {
    component.newHeroForm.setValue({
      name: '',
      description: '',
      power: '',
      height: '',
      weight: '',
      gender: ''
    });

    expect(component.newHeroForm.valid).toBeFalse();
  });

  it('should not call createNewHero when form is invalid', () => {
    component.newHeroForm.setValue({
      name: '',
      description: '',
      power: '',
      height: '',
      weight: '',
      gender: ''
    });

    component.onSubmitNewHeroeForm();

    expect(mockHeroService.createNewHero).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to /heroes when cancel is called', () => {
    component.onCancelSubmitNewHeroe();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes']);
  });
});

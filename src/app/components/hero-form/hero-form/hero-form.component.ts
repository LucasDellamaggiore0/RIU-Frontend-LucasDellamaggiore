import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private heroService = inject(HeroService);
  newHeroForm: FormGroup;
  
  constructor() {
    this.newHeroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      power: ['', Validators.required],
      height: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required]
    })
  }

  onSubmitNewHeroeForm() {
    if (this.newHeroForm.valid) {
      const newHero = this.newHeroForm.value;
      this.heroService.createNewHero(newHero);
      console.log('Nuevo héroe:', newHero);
      this.router.navigate(['/heroes']);
    } else {
      this.newHeroForm.markAllAsTouched();
    }
  }

  onCancelSubmitNewHeroe() {
    this.router.navigate(['/heroes'])
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  @Input() hero!: Hero;
  @Output() editHero = new EventEmitter<number>();
  @Output() removeHero = new EventEmitter<number>();

  onEditHero() {
    this.editHero.emit(this.hero.id);
  }

  onRemoveHero() {
    this.removeHero.emit(this.hero.id);
  }

}

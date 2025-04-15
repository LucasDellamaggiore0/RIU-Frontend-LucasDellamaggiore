import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../models/hero.model';
import { UppercaseDirective } from '../../../directives/uppercase.directive';

@Component({
  selector: 'app-hero-card',
  imports: [UppercaseDirective],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  @Input() hero!: Hero;
  @Output() editHero = new EventEmitter<Hero>();
  @Output() removeHero = new EventEmitter<Hero>();

  onEditHero() {
    this.editHero.emit(this.hero);
  }

  onRemoveHero() {
    this.removeHero.emit(this.hero);
  }

}

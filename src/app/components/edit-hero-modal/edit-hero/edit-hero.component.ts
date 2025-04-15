import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../models/hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css'
})
export class EditHeroComponent {
  @Input() isOpen = false;
  @Input() hero: Hero | null = null;

  @Output() closeModal = new EventEmitter<void>();
  @Output() saveHero = new EventEmitter<Hero>();


  editableHero!: Hero;


  ngOnChanges() {
    if (this.hero) {
      this.editableHero = {...this.hero};
    }
  }

  closedModal() {
    this.closeModal.emit();
  }

  savedHero() {
    this.saveHero.emit(this.editableHero);
  }
}

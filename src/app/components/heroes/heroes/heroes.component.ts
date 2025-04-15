import { Component, inject } from '@angular/core';
import { HeroCardComponent } from '../../hero-card/hero-card/hero-card.component';
import { HeroService } from '../../../services/hero.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-heroes',
  imports: [HeroCardComponent, FormsModule, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})


export class HeroesComponent {
  private heroService = inject(HeroService);
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  searchHeroQuery = '';
  currentPage = 1;
  itemsPerPage = 6;

  constructor() {
    this.heroService.getAllHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.filteredHeroes = [...heroes]
    })
  }

  get paginatedHeroes(): Hero[] {
    const initialPage = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredHeroes.slice(initialPage, initialPage + this.itemsPerPage)
  }

  nextPage() : void{
    if ((this.currentPage * this.itemsPerPage) < this.filteredHeroes.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onSearch() {
    this.currentPage = 1;
    const term = this.searchHeroQuery.toLowerCase();
    this.filteredHeroes = this.heroes.filter(hero =>
      hero.name.toLowerCase().includes(term)
    );
  }

  editHero(id: number) {
    console.log('Editar héroe:', id);
    // Lógica para navegación o modal
  }

  deleteHero(id: number) {
    if (confirm('¿Estás seguro de eliminar este héroe?')) {
      this.heroService.removeHero(id);
    }
  }

  addHero() {
    console.log('Añadir nuevo héroe');
    // Lógica para agregar
  }
}

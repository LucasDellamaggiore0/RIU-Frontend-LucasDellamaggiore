import { Component, inject } from '@angular/core';
import { HeroCardComponent } from '../../hero-card/hero-card/hero-card.component';
import { HeroService } from '../../../services/hero.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../../../models/hero.model';
import Swal from 'sweetalert2';
import { EditHeroComponent } from "../../edit-hero-modal/edit-hero/edit-hero.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [HeroCardComponent, FormsModule, CommonModule, EditHeroComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})


export class HeroesComponent {
  
  private heroService = inject(HeroService);
  private router = inject(Router);
  
  
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  searchHeroQuery = '';
  currentPage = 1;
  itemsPerPage = 6;
  selectedHero!: Hero | null;
  isEditModalOpen = false;

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

  editHero(hero: Hero) {
    this.selectedHero = hero;
    this.isEditModalOpen = true;
  }

  onSaveEditedHero(updatedHero: Hero) {
    const index = this.heroes.findIndex(h => h.id === updatedHero.id);
    if (index !== -1) {
      this.heroes[index] = updatedHero;
      this.onSearch();
    }
    this.closeEditModal();
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedHero = null;
  }

  deleteHero(hero: Hero) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroes = this.heroes.filter(h => h.id !== hero.id);
        this.onSearch();
        Swal.fire('Eliminado', 'El héroe ha sido eliminado.', 'success');
      }
    });
  }


  addHero() {
    this.router.navigate(['/add'])
  }
}

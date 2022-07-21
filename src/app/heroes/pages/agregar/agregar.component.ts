import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Other Comics',
      desc: 'Other - Comics'
    },
    {
      id: 'Marvel Comics>',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: ''
  }

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroService.getHeroesById(id))
      )
      .subscribe(heroe => this.heroe = heroe);


  }

  save() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //? Actualzar
      this.heroService.updateHero(this.heroe).subscribe(res => console.log('Actualizando: ', res));
    } else {
      //? Insertar

      this.heroService.addHero(this.heroe).subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id])
      });
    }    
  }

  delete() {
    this.heroService.deleteHero( this.heroe.id! )
      .subscribe( resp =>  {
        this.router.navigate(['/heroes'])
      })
  }

}

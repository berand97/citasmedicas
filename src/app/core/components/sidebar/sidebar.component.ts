import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = [
    { title: 'Panel',         icono: 'iconoir-home-simple',   url: '/dashboard/panel',  },
    { title: 'Citas',         icono: 'iconoir-archive',       url: '/dashboard/citas',  },
    { title: 'Crear Cita',    icono: 'iconoir-add-page',      url: '/dashboard/crear-citas',  },
    { title: 'Usuarios',      icono: 'iconoir-group',         url: '/dashboard/usuarios',  },
    { title: 'Categorias',    icono: 'iconoir-drawer',        url: '/dashboard/categorias',  },
    { title: 'Descuentos',    icono: 'iconoir-money-square',  url: '/dashboard/descuentos'},
    { title: 'Cerrar sesión', icono: 'iconoir-log-out',       url: '/dashboard/',  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

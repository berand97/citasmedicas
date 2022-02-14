import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`
    .bg-primary { background-color: var(--primary) !important; }

    .bg-light { background-color: var(--light) !important; }

    .bg-grey { background-color: var(--grey) !important; }

    .btn-primary {
        background-color: var(--primary);
        border: 0;
    }

    .btn-primary:hover {
        background-color: var(--primary);
    }

    .avatar {
        max-width: 35px;
    }

    .btn-search {
        right: 0;
    }

    .stat {
        border-right: 1px solid var(--grey);
    }
`],
})
export class NavbarComponent implements OnInit {

  @Input()
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}

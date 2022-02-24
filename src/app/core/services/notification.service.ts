import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  error(titulo: string) {
    Swal.fire({
      html: 'Ocurrio un error inesperado, por favor contacte al administrador',
      title: titulo,
      icon: 'error',
      showCloseButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Cerrar'
    });
  }

  sucess(title: string): Observable<ConfirmAction> {
    return from(
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Se ha creado ${title} satisfactoriamente`,
        showConfirmButton: false,
        timer: 3000
      })
    ).pipe(switchMap(a => of({ confirm: a.isConfirmed })));
  }

  warning() {
    Swal.fire({
      title: 'complete todos los campos',
      icon: 'warning',
      showConfirmButton: false,
      timer: 3000
    });
  }

}

export interface ConfirmAction {
  confirm: boolean;
}

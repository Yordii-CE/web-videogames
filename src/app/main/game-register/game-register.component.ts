import { Component } from '@angular/core';

@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.css'],
})
export class GameRegisterComponent {
  public titulo: string = '';
  public descripcion: string = '';
  public fechaLanzamiento: string = '';
  public proximamente: boolean = true;
  public clasificacion: number = 0;
  public numDescargas: number = 0;

  registrarVideojuego() {
    // Aquí puedes agregar la lógica para registrar el videojuego
    // Por ejemplo, puedes enviar los datos a un servicio o API.
    console.log('Videojuego registrado:');
    console.log('Título:', this.titulo);
    console.log('Descripción:', this.descripcion);
    console.log('Fecha de Lanzamiento:', this.fechaLanzamiento);
    console.log('Próximamente:', this.proximamente);
    console.log('Clasificación:', this.clasificacion);
    console.log('Número de Descargas:', this.numDescargas);
  }
}

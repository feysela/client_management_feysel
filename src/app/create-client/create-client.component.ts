import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  name = '';
  email = '';
  address = '';
  password = '';
  repeatPassword = '';

  onSubmit() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Address:', this.address);
    console.log('Password:', this.password);
    console.log('Repeat Password:', this.repeatPassword);
  }
}
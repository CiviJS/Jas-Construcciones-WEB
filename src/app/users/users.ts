import { Component,OnInit } from '@angular/core';
import {UsersService} from '../services/users'

@Component({
  selector: 'app-users',
  imports: [],
  standalone: true,
  templateUrl: './users.html',
  styleUrl: './users.css'
})

export class UsersComponent implements OnInit{
  users: any[] =[];
  error: string ='';
  constructor(private usersService: UsersService){}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.usersService.getUsers().subscribe({
      next:(data) => this.users = data,
      error: (err) => this.error = "error al cargar usuarios"

    });
    
    console.log(this.users)
  }
    deleteUser(id: number | string) {
    this.usersService.deleteUsers(id).subscribe({
      next: () => this.loadUsers(),
      error: () => this.error = 'Error al eliminar usuario'
    });
}
}


import { Component, OnInit, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);

  users = signal<User[]>([]);
  search = '';

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get filteredUsers() {
    return this.users().filter(u =>
      u.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  goToDetail(id: number) {
    this.router.navigate(['/user', id]);
  }
}


import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private router = inject(Router);

  user = signal<User | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.user.set(data);
      },
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

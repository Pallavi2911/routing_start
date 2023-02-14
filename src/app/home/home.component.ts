import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //inject router
  constructor(
    private router: Router,
    //ActivatedRoute loads the currently active route
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLoadServes() {
    //navigate to servers component
    //navigate using absolute path
    // this.router.navigate(['/servers']);
    //navigate using relative path
    //relativeTo defines relative to which route this link should be loaded . When not defined it is root domain by default
    this.router.navigate(['servers'], { relativeTo: this.route });
  }

  //use query params and fragments on both programmatic routing approach
  //for routerLink approach check servers.component.html file
  onLoadServer(id: number) {
    this.router.navigate(['servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}

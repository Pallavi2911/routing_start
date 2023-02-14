import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //retrieve the param
    //id is is number here so we need to convert id string to number by adding +
    const idConst = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(idConst);

    //retrieve the param reactively
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

  //video 141
  //queryParamsHandling: 'merge' , to merge our old query params with any new we might add
  //queryParamsHandling: 'preserve', to preserve the query params that are getting dropped by default
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}

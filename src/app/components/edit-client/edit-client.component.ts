import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id = 0;
  myClient: Client = {
    name: '',
    phone: '',
    email: '',
    balance: 0
  }

  constructor(private router: Router, private flashMessage: FlashMessagesService, private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.recupClient(this.id);
  }

  recupClient(id) {
    this.clientService.getClient(id)
                      .subscribe((res: Client) => {
                          this.myClient = res;
                      })
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.myClient)
                      .then(res => {
                                        
                        this.flashMessage.show('Client updated', {
                          cssClass: 'alert-success',
                          timeout: 3000
                        });

                        this.router.navigate(['/clients']);
                      })
                      .catch(err => {
                        this.flashMessage.show(err.message, {
                          cssClass: 'alert-danger',
                          timeout: 3000
                        });
                      })
  }

}

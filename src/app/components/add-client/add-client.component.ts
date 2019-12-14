import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
 
  reload = false;
  task: AngularFireUploadTask;
  previewImage = null;
  getImage = null;
  myClient: Client = {
    name: '',
    phone: '',
    email: '',
    balance: 0
  }

  constructor(
        private clientService: ClientService,
        private afStorage: AngularFireStorage,
        private flashMessage: FlashMessagesService,
        private router: Router) { }

  ngOnInit() {
  }

  persistClient(form) {
   
    if(form.valid) {
        
        this.reload = true
        const image = this.getImage;
        const myFile = 'depots/clients/'+image.name;
        
        this.task = this.afStorage.upload(myFile, image);
        const ref = this.afStorage.ref(myFile);
         
        this.task.snapshotChanges().pipe(
          finalize(() => {
            console.log('finalize')
            ref.getDownloadURL().subscribe((downloadURL) => {
                form.value.image = downloadURL;
                this.clientService.addClient(this.myClient)
                  .then((res) => this.router.navigate(['/']))
                  .catch((error) => console.error('i am a catch erro:', error))
            })
          })
        ).subscribe()
  
       
        this.flashMessage.show('Client added', {
          cssClass: 'alert-success',
          timeout: 3000
        });

        this.router.navigate(['/clients']);
     
    }else {
      this.flashMessage.show('Your form is Invalid !!', {
        cssClass: 'alert-warning',
        timeout: 3000
      });
    }
    
   }


  log(data) {
    console.log(data)
  }

  showImage(event) {
    this.getImage = event.target.files[0];
 
    const reader = new FileReader();
    reader.onload = () => this.previewImage = reader.result;
    reader.readAsDataURL(this.getImage)
  }

}

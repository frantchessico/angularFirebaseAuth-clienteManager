import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {

    this.clientCollection = afs.collection('users');
  }

  getClients() {
    return this.clientCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addClient(client) {
     return this.clientCollection.add(client);
  }

  deleteClient(id) {
    return this.clientCollection.doc(id).delete();
  }

  getClient(id) {
    return this.clientCollection.doc(id).valueChanges();
  }

  updateClient(id, client: Client) {
    return this.clientCollection.doc(id).update(client);
  }

  setStatusClient(client) {
    return this.clientCollection.doc(client.id).update({active: !client.active});
  }
}

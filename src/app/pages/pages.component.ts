import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'pages-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
  public showNew: boolean = false;
  public pageList: Array<any> = [];
  constructor(private auth: AuthService,
    public af: AngularFirestore) {  }
  
  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);

    this.af.collection("/Pages")
      .snapshotChanges()
      .subscribe(x => {
        let documentArray: Array<any> = [];
        x.forEach(element => {
          this.af.doc<any>('/Pages/' + element.payload.doc.id)
            .valueChanges()
            .subscribe(x => documentArray.push({id: element.payload.doc.id, doc: x }));
        });

        this.pageList = documentArray;
      });

  }

  public hidePage(args: { type: string, text: string }) {
    if (args.type == "success") this.showNew = false;
  }

}

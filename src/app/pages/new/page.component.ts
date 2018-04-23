import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'new-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  
  public msgArray: Array<string> = [];

  public page: { 
      title: string, 
      subject: string,
      slug: string,
      publishedDate: Date,
      body: string
    } = {
      title: "",
      subject: "",
      slug: "",
      publishedDate: new Date(),
      body: ""
    }
  constructor(private auth: AuthService,
    public af: AngularFirestore) {  }
  
  ngOnInit(): void { 
    

  }

  saveObject() {
    this.af.collection("/Pages")
      .add(this.page)
      .then(x => {
        this.msgArray.push("The page was created!");
      })
  }

}

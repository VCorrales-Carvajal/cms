import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'new-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  
  @Output() InsertPageDone: EventEmitter<{ type: string, text: string }> 
    = new EventEmitter();

  public msgArray: Array<{type: string, text: string}> = [];

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
        this.InsertPageDone.emit({ type: "success", text: "The page was created!" });
        //this.msgArray.push({type: "success", text: "The page was created!"});
      })
  }

}

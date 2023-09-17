import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collectionData, collection, doc  } from '@angular/fire/firestore'
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, 
              public dialog: MatDialog,  
              private Firestore: Firestore) {}

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUserId();
      // console.log('GOT ID, this.userId')
      // .doc(this.userId);
      // .subscribe(() => {
// this.user = new User('user');
// console.log('Retrieved User'this.user)
      // })
      // this.userId;
    })
  }
}


// function subscribe(arg0: (user: any) => void) {
//   throw new Error('Function not implemented.');
// }


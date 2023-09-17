import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { Firestore, collectionData, collection, } from '@angular/fire/firestore';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User(); 
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: Firestore, private router: Router, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    
    
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance)
    
    .subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}


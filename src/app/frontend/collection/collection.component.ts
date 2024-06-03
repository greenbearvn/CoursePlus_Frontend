import { Component } from '@angular/core';
import { CollectionService } from 'src/app/services/frontend/collection/collection.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { BlogService } from 'src/app/services/frontend/blog/blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: [
    './collection.component.css','../css/style.css'
  ],
})
export class CollectionComponent {
  constructor(
    private colService: CollectionService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  searchData:any;
  detailCollections:any;

  userId:any;

  collection:any;




  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get('id'));

    this.getCollectionId();
    
  }


  getCollectionId(){
    this.colService.getCollectionId(this.userId).subscribe((data) => {
      this.collection = data;
      console.log(this.collection);
      this.getList();
    });
  }

  getList() {
    this.colService.getListCollection(this.collection.collectionId).subscribe((data) => {
      this.detailCollections = data;
      console.log(this.detailCollections);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from "../shared-service.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  
  bloglist = this.myService.blogs;
  constructor(private myService: SharedServiceService, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params.id);
   }

  ngOnInit() {
  }

}

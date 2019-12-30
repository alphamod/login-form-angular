import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SharedServiceService } from "../shared-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  myformGroup: FormGroup;
  constructor( private myService: SharedServiceService, private myroute: Router) { 
    this.myformGroup = new FormGroup({
      blogName: new FormControl(''),
      blogSubject: new FormControl(''),
      blogContent: new FormControl('')
    })
  }

  addcon() {
    this.myService.blogs.push(this.myformGroup.value);
    this.myroute.navigate(['/holder/list-blog'])
  }
  ngOnInit() {
  }

}

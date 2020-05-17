import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs = [];

  constructor(public blogHttpService: BlogHttpService) {

  }

  ngOnInit(): void {
    this.blogHttpService.getAllBlogs().subscribe(
      data => {
        this.allBlogs = data["data"];
      },
      error => {
        console.log(error);
      }
    );
  }

}

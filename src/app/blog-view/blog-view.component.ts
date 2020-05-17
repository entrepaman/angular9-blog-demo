// tslint:disable: max-line-length

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location] 
})
export class BlogViewComponent implements OnInit {
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, private location: Location) { }

  ngOnInit(): void {
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        this.currentBlog = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  public deleteBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        $('.toast').toast({
          animation: true,
          autohide: true,
          delay: 2000
        });
        $('.toast').toast('show');

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      error => {
        console.log(error);
      }
    );
  }

  public goToHome(): any {
    this.location.back();
  }
}

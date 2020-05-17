import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogHttpService } from '../blog-http.service';

declare var $: any;

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog: any = {};
  public possibleCategories: Array<string> = ['Comedy', 'Crime', 'Thriller', 'Sci-fi', 'Romance'];

  constructor(private route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(blogId).subscribe(
      (data: { data: any; }) => {
        this.currentBlog = data.data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public editBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      (data: { data: any; }) => {
        $('.toast').toast({
          animation: true,
          autohide: true,
          delay: 2000
        });
        $('.toast').toast('show');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 2000);
      },
      (err: { err: any; }) => {
        console.log(err);
      }
    );
  }

}

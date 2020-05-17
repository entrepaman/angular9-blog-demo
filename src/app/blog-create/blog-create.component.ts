import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories: Array<string> = ['Comedy', 'Crime', 'Thriller', 'Sci-fi', 'Romance'];

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  public createBlog(): any {
    const blogData = {
      title: this.blogTitle,
      blogBody: this.blogBodyHtml,
      description: this.blogDescription,
      category: this.blogCategory
    };

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        $('.toast').toast({
          animation: true,
          autohide: true,
          delay: 2000
        });
        $('.toast').toast('show');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 2000);
      },
      err => {
        console.log(err);
      }
    );
  }

}

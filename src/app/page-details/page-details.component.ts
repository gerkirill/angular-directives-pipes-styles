import { EmailService } from 'app/services/email.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {

  public id;

  constructor(
    private route: ActivatedRoute,
    private email: EmailService
  ) {
    // this.id = route.snapshot.paramMap.get('id');
    // this.getEmailDetails(this.id);
    // console.log(this.id);

    // let id;

    route.paramMap.subscribe(params => {
      this.id = params.get('id');
      // id = params.get('id');
      this.email.getEmailDetails(this.id);
    });


  }

  ngOnInit() {
    // this.
  }

}

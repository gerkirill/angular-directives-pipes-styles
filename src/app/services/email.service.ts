import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor() { }

  getEmailDetails(id) {
    console.log('SERVICE: Loading data for e-mail ID # ' + id);
  }

}

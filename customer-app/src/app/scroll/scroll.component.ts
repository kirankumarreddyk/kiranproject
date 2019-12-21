import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor() { }
  moveToSpecificView(idtype: any) {
    setTimeout(() => {
      idtype.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
  }
  ngOnInit() {
  }

}

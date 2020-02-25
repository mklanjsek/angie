import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-person-tile',
  templateUrl: './person-tile.component.html',
  styleUrls: ['./person-tile.component.scss'],
})
export class PersonTileComponent implements OnInit {
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  @Input() person: any;
  @Output() personClick= new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  clickHandler () {
    this.personClick.emit(this.person.firstName);
  }
}

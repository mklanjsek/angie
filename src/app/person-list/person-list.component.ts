import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  persons = [{
    firstName: 'Milan',
    lastName: 'Klanjsek',
    image: 'milan.jpeg',
    description: 'Making solid code since 1983, endurance athlete powered by sunshine and espresso',
    insta: 'https://www.instagram.com/milanklanjsek/',
    twitter: 'https://twitter.com/TriMilan',
  },
  {
    firstName: 'Oza',
    lastName: 'Klanjsek',
    image: 'oza.jpeg',
    description: 'Is it Massive? Is it Transformative? Is it Purposeful? Views are mine.',
    insta: 'https://www.instagram.com/ozaklanjsek/',
    twitter: 'https://twitter.com/ozaklanjsek',
    },
  {
    firstName: 'Adrian',
    lastName: 'Klanjsek',
    image: 'adrian.jpeg',
    description: '17 yrs old. Daily: 11 e92 328i rwd, 06 WRX limited (totaled), yz450f Yamaha',
    insta: 'https://www.instagram.com/n52_emily_/',
    },
  {
    firstName: 'Margo',
    lastName: 'Klanjsek',
    image: 'margo.jpeg',
    description: 'dsa 2022, 3d lacrosse',
    insta: 'https://www.instagram.com/margosimone/',
    twitter: 'https://twitter.com/klanjsekmargo',
    },
  {
    firstName: 'Scooch',
    lastName: 'Klanjsek',
    image: 'scooch.jpeg',
    description: 'One and only Scooch',
    },
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

  handlePersonClicked(data) {
    console.log('Hi ', data);
  }
}

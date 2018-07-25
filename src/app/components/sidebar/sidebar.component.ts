import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus = [
    {
      title: 'Groups',
      link: '#',
      icon: 'folder_open',
      active: false
    },
    {
      title: 'Projects',
      link: '',
      icon: 'folder',
      active: true
    },
    {
      title: 'Forms',
      link: '#',
      icon: 'list_alt',
      active: false
    },
    {
      title: 'Settings',
      link: '#',
      icon: 'settings',
      active: false
    },
    {
      title: 'Map & Data View',
      link: '#',
      icon: '',
      active: false
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}

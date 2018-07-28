import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projectForm: FormGroup;
  forms = [];
  users = [];
  symbols = [
    {
      value: '&#9898',
      name: 'Default'
    },
    {
      value: '&#9898',
      name: 'White circle'
    },
    {
      value: '&#9963',
      name: 'Castle'
    },
    {
      value: '&#9750',
      name: 'Shogi piece'
    }
  ]
  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      forms: new FormControl(),
      usersControl: new FormControl(),
      symbol: new FormControl(this.symbols[0])
    })
    this.getForms();
    this.getUsers();
  }

  getForms() {
    this.dashboardService.getForms().subscribe(res => {
      this.forms = res.result;
    }, err => {
      alert(JSON.stringify(err));
    })
  }
  getUsers() {
    this.dashboardService.getUsers().subscribe(res => {
      this.users = res.result;
    }, err => {
      alert(JSON.stringify(err));
    })
  }

  createProject() {
    let payload = {
      projectName: this.projectForm.value.projectName,
      formsSubmitted: this.projectForm.value.forms ? this.projectForm.value.forms.length : 0,
      total: this.projectForm.value.usersControl ? this.projectForm.value.usersControl.length : 0,
      description: this.projectForm.value.description,
      count: 10,
      symbol: this.projectForm.value.symbol,
      users: this.projectForm.value.usersControl,
      forms: this.projectForm.value.forms
    }
    this.dashboardService.addProject(payload).subscribe(res => {
      if (res && res.success) {
        alert('Project successfully created.');
        this.router.navigate(['./trans/projects']);
      } else {
        alert(JSON.stringify(res));
      }
    }, err => {
      alert(JSON.stringify(err));
    })
  }

}

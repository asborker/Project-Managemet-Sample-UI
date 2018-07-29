import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Projects, Project } from '../../models/project.model';
import { MatTabChangeEvent } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private projects: Project[] = [];
  private selectedProject = {};
  private projectList: any = [];
  reloadFormData: boolean = true;
  @ViewChild('tabGroup') tabGroup;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // this. getProjectList();
    this.getAllProjectData();
  }

  getProjectDetails(projectId, index) {
    _.forEach(this.projects, function (value, key) {
      if (key == index) {
        value.selected = true;
      } else {
        value.selected = false;
      }
    })
    this.dashboardService.getProjectById(projectId).subscribe(res => {
      if (res.result && res.result.length > 0) {
        this.selectedProject = this.projects[_.findIndex(this.projects, ['projectId', res.result[0].projectId])];
      }
    }, err => {
      alert(JSON.stringify(err));
    })
  }

  getAllProjectData() {
    this.dashboardService.getAllProjectData().subscribe(res => {
      if (res && res.result) {
        this.projects = new Projects(res.result).projects;
        this.selectedProject = this.projects[0];
      }
    }, err => {
      alert(JSON.stringify(err));
    })
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index == 0) {
      this.reloadFormData = true;
    } else {
      this.reloadFormData = false;
    }
  }

}

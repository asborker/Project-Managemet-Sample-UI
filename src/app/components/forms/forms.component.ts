import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef, OnChanges } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [DashboardService]
})
export class FormsComponent implements OnInit {

  @Input() projectId: number;
  @Input() reload: boolean;
  formOptions = [{ name: 'Custom Form', selected: false }];
  forms = [];
  reminders = ['Daily'];
  selected = this.reminders[0];

  constructor(private formService: DashboardService, private ref: ChangeDetectorRef, ) { }

  ngOnInit() {
    if (this.projectId) {
      this.getProjectForms(this.projectId);
    } else {
      this.getProjectForms(1);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.reload) {
      this.getProjectForms(this.projectId ? this.projectId : 1);
    }
  }

  getForms() {
    this.formService.getForms().subscribe(res => {
      this.forms = res.result;
    }, err => {
      alert(JSON.stringify(err));
    })
  }

  getProjectForms(projectId) {
    this.formService.getProjectForms(projectId).subscribe(res => {
      this.forms = res.result;
    }, err => {
      alert(JSON.stringify(err));
    })
  }



}

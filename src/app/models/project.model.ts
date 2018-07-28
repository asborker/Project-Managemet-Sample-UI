
import * as _ from 'lodash';

export class Project {
    projectId = '';
    description = '';
    projectName = '';
    formsSubmitted = 0;
    count = 0;
    total = 0;
    symbol = '';
    createdOn = '';
    lastUpdated = '';
    selected: boolean = false;
    users: User[] = [];

    constructor(private data) {
        if (data) {
            this.projectId = data.projectId;
            this.description = data.description;
            this.projectName = data.projectName;
            this.formsSubmitted = data.formsSubmitted;
            this.count = data.count;
            this.total = data.total;
            this.symbol = data.symbol ? data.symbol : '';
            this.selected = false;
            this.createdOn = data.createdOn;
            this.lastUpdated = data.lastUpdated;
            this.users = data.users ? data.users : []
        } else {
            this.projectId = '';
            this.description = '';
            this.projectName = '';
            this.formsSubmitted = 0;
            this.count = 0;
            this.total = 0;
            this.symbol = '';
            this.selected = false;
            this.createdOn = '';
            this.lastUpdated = '';
            this.users = [];
        }
    }
}

export class Projects {

    projects: Project[] = [];
    constructor(private projectData) {
        this.projects = this.filterUsers(projectData);
    }

    filterUsers(projectData) {
        let temp = 0, projects = [], obj = new Project({});
        projectData.forEach(function (value, index) {
            if (!temp || temp != value.projectId) {
                obj = new Project(value);
                if(index == 0) obj.selected = true;
                obj.users.push(new User(value));
            } else {
                obj.users.push(new User(value));
            }
            temp = value.projectId;
            if (projects.length > 0) {
                let proIndex = _.findIndex(projects, ['projectId', value.projectId]);
                if (proIndex != -1) {
                  projects[proIndex] = obj;
                } else {
                  projects.push(obj);
                }
              } else {
                projects.push(obj);
              }
        })
        return projects
    }
}

export class User {
    userId = '';
    firstName = '';
    lastName = '';
    imageURL = '';
    age = '';
    constructor(user) {
        if (user) {
            this.userId = user.userId;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.imageURL = user.imageURL;
            this.age = user.age;
        } else {
            this.userId = '';
            this.firstName = '';
            this.lastName = '';
            this.imageURL = '';
            this.age = '';
        }
    }
}
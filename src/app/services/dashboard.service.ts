import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';
import { AppConfig } from '../util/app-config';
import { HttpService } from './http.service';

@Injectable()
export class DashboardService {

    constructor(private http: Http,
        private httpService: HttpService) { }

    getProjectList() {
        let apiLink = AppConfig.API_ENDPOINTS.GET_PROJECT_LIST;
        return this.httpService.requestHandler('get', environment.apiEndpoint, apiLink, {}, undefined);
    }

    getAllProjectData() {
        let apiLink = AppConfig.API_ENDPOINTS.GET_ALL_PROJECTS_DATA;
        return this.httpService.requestHandler('get', environment.apiEndpoint, apiLink, {}, undefined);
    }

    getProjectById(projectId: number) {
        let apiLink = AppConfig.API_ENDPOINTS.GET_PROJECT_BY_ID + '/' + projectId;
        return this.httpService.requestHandler('get', environment.apiEndpoint, apiLink, {}, undefined);
    }

    getUsers() {
        let apiLink = AppConfig.API_ENDPOINTS.GET_USERS;
        return this.httpService.requestHandler('get', environment.apiEndpoint, apiLink, {}, undefined);
    }

    getForms() {
        let apiLink = AppConfig.API_ENDPOINTS.GET_FORMS;
        return this.httpService.requestHandler('get', environment.apiEndpoint, apiLink, {}, undefined);
    }

    getProjectForms(projectId: number) {
        let apiLink = AppConfig.API_ENDPOINTS.GET_PROJECT_FORMS + '/' + projectId;
        return this.httpService.requestHandler('get', environment.apiEndpoint, apiLink, {}, undefined);
    }

    addProject(payload) {
        let apiLink = AppConfig.API_ENDPOINTS.ADD_PROJECT;
        return this.httpService.requestHandler('post', environment.apiEndpoint, apiLink, payload, undefined);
    }

}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class HttpService {

    apiLink = environment.apiEndpoint;

    constructor(private http: Http,
        private router: Router) { }

    requestHandler(methodType, apiLink, apiEndPoint, apiBody = {}, headerObj) {
        this.apiLink = apiLink ? apiLink : this.apiLink;
        headerObj = headerObj ? headerObj : { 'Content-Type': 'application/json; charset=utf-8' };
        methodType = methodType ? methodType : 'post';
        const headers = new Headers(headerObj);

        if (methodType === 'get') {
            return this.http.get(this.apiLink + apiEndPoint, { headers: headers })
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.errorHandler);
        } else if (methodType === 'delete') {
            const options = new RequestOptions({
                headers: headers,
                body: apiBody
            });

            return this.http.delete(this.apiLink + apiEndPoint, options)
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.errorHandler);

        } else {
            return this.http[methodType](this.apiLink + apiEndPoint, apiBody, { headers: headers })
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.errorHandler);
        }
    }

    errorHandler(error: any) {
        return Observable.throw(error || 'server error');
    }
}

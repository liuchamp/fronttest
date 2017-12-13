import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    constructor() { }


    send(message: any) {
        this.subject.next(message);
    }

    get():Observable<any> {
        return this.subject.asObservable();
    }
    
}
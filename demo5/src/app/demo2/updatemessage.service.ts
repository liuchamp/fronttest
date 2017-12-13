import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject'
/**
 * 用于BehaviorSubject使用展示. http://blog.csdn.net/dbs1215/article/details/52454866 
 * BehaviorSubject初始化是，必须有一个值，这是于Subject不同的地方之一
 * 
 */
@Injectable()
export class UpdatemessageService {

    private obsubject=new BehaviorSubject<any>("");

    constructor() { }

    findName(idng: any): void  {
        this.obsubject.next(idng);
    }
    getName(): Observable<any> {
        return this.obsubject.asObservable();
    }
}
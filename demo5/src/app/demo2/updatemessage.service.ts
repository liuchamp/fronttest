import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject'
/**
 * 用于BehaviorSubject使用展示. http://blog.csdn.net/dbs1215/article/details/52454866 
 * BehaviorSubject初始化是，必须有一个值，这是于Subject不同的地方之一
 *  参考这篇博文，就能看清楚其使用方法。

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

/**
 	区别集中subject的博文： http://blog.csdn.net/kongbaidepao/article/details/51240456 
 	
*/
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { fakedata } from './user-list/fake-data';

@Injectable({ providedIn: 'root' })
export class UserRoutingResolveService implements Resolve<any> {
  constructor(protected service: UserService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Observable<never> {
    const id = route.params['id'];
    const result = JSON.parse(fakedata);
    const userList: any[] = result.data;
    const user = userList.find(element=>element.id == id)
    return user

    //////*********Data base implementation******/////////
    // if (id) {
    //   return this.service.find(id).pipe(
    //     mergeMap((user: HttpResponse<any>) => {
    //       if (user.body) {
    //         return of(user.body);
    //       } else {
    //         this.router.navigate(['404']);
    //         return EMPTY;
    //       }
    //     })
    //   );
    // }
    // return of(new User());
  }
}

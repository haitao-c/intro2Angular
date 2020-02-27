import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('用户未登陆');
    }
    // 返回一个布尔值给angular决定路由是否通过
    return loggedIn;
  }
}

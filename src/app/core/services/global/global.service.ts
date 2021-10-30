import { Injectable, Inject,PLATFORM_ID } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {isPlatformBrowser} from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isBrowser: boolean = false;
  isExpired: boolean = false;
  loader = `<div class="div-loader">
    <img src="../assets/gif/loader_spinner.gif" alt="Loading..." />
  	</div>`;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private spinner: NgxSpinnerService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  checkIsBrowser() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    return this.isBrowser;
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scroll(0, 0);
    }
  }
  isLoggedIn() {
    let hasToken = this.getLocalStorage('access-token');
    if (hasToken && !this.isExpired) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    if (this.isBrowser) {
      localStorage.clear();
      this.spinner.hide();
    }
  }

  setLocalStorage(key:string, data:any) {
    if (this.isBrowser) {
      localStorage.setItem(key, data);
    }
  }

  getLocalStorage(key:string) {
    if (this.isBrowser) {
      try {
        var data = localStorage.getItem(key);
        return data;
      } catch (e) {
        return null;
      }
    }
    return null;
  }

}

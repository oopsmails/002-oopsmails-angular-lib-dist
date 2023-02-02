import { Component, ViewChild } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared.data.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
export class NavBarComponent {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.onDestroy$ = new Subject();
    }
    ngOnInit() {
        this.navBarConfig$ = this.sharedDataService.getNavBarConfig();
        // this.sharedDataService
        //   .getNavBarConfig()
        //   .pipe(tap((res) => console.log(res)))
        //   .subscribe((res) => (this.navBarConfig = res));
    }
    ngAfterViewInit() {
        // this.navbarClick = fromEvent(this.navbarElementRef.nativeElement, 'click').subscribe(
        fromEvent(this.navbarElementRef.nativeElement, 'click')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((x) => {
            // console.log("NavbarFixedComponent, ngAfterViewInit ... ", x);
            this.menubarElementRef.nativeElement?.click();
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
NavBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavBarComponent, deps: [{ token: i1.SharedDataService }], target: i0.ɵɵFactoryTarget.Component });
NavBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NavBarComponent, selector: "nav-bar-example", viewQueries: [{ propertyName: "navbarElementRef", first: true, predicate: ["navbar"], descendants: true }, { propertyName: "menubarElementRef", first: true, predicate: ["menubar"], descendants: true }], ngImport: i0, template: "<div class=\"header-div\">\r\n  <a routerLink=\"\" class=\"logo\">LOGO</a>\r\n\r\n  <input type=\"checkbox\" id=\"menu-bar\" #menubar />\r\n  <!-- <label for=\"menu-bar\">Menu</label> -->\r\n  <label for=\"menu-bar\" class=\"nav-toggle-label\">\r\n    <!-- <span>X</span> -->\r\n    <span></span>\r\n  </label>\r\n\r\n  <nav class=\"navbar\" #navbar>\r\n    <ul>\r\n      <li *ngFor=\"let item of navBarConfig$ | async; let i = index\">\r\n        <!-- <li *ngFor=\"let item of navBarConfig; let i = index\"> -->\r\n        <a *ngIf=\"!item.submenu.length\" routerLink=\"{{ item.parentLink }}\">{{ item.linkText }}</a>\r\n        <a *ngIf=\"item.submenu.length\">\r\n          {{ item.linkText | uppercase }}\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li *ngFor=\"let subItem of item.submenu\">\r\n            <a routerLink=\"{{ subItem.link }}\">{{ subItem.childtext }}</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <!-- <li>\r\n        <a routerLink=\"/home\"\r\n          >Home\r\n          <span class=\"badge-num\"> 0 </span>\r\n        </a>\r\n      </li>\r\n      <li><a routerLink=\"/example/home\">Example</a></li>\r\n      <li><a routerLink=\"/store/home\">NgrxStore</a></li>\r\n      <li><a routerLink=\"/sandbox/home\">Sandbox</a></li>\r\n      <li>\r\n        <a>\r\n          GOTO\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li><a routerLink=\"sandbox/search-city\">Search City Filter</a></li>\r\n          <li><a routerLink=\"sandbox/search-plant\">Search Plant Filter</a></li>\r\n          <li><a routerLink=\"sandbox/us-state\">US States</a></li>\r\n          <li><a routerLink=\"sandbox/search-state\">Search US States</a></li>\r\n        </ul>\r\n      </li> -->\r\n    </ul>\r\n  </nav>\r\n</div>\r\n", styles: ["*{margin:0;padding:0;box-sizing:border-box;text-transform:capitalize;text-decoration:none}.header-div{position:fixed;z-index:1000;top:0;left:0;right:0;height:var(--nav-height);background:var(--primary-color);box-shadow:0 5px 10px #0000001a;padding:0 7%;display:flex;align-items:center;justify-content:space-between}.header-div .logo{font-weight:bolder;font-size:25px;color:#333}.header-div .navbar ul{list-style:none}.header-div .navbar ul li{position:relative;float:left}.header-div .navbar ul li a{font-size:20px;padding:20px;color:#333;display:block}.header-div .navbar ul li a:hover{background:#333;color:#fff}.header-div .navbar ul li a:hover .arrow{border:solid white;border-width:0 3px 3px 0}.header-div .navbar ul li ul{position:absolute;left:0;width:200px;background:#fff;display:none}.header-div .navbar ul li ul li{width:100%;border-top:1px solid rgba(0,0,0,.1)}.header-div .navbar ul li ul li a{font-size:16px;padding:10px;display:block}.header-div .navbar ul li ul li ul{left:200px;top:0}.header-div .navbar ul li:hover>ul{display:initial}#menu-bar{border:1px solid red;display:none}.nav-toggle-label{position:absolute;top:1.5em;right:0;margin-right:1em;height:100%;display:flex;align-items:center}.nav-toggle-label span,.nav-toggle-label span:before,.nav-toggle-label span:after{display:block;background:#333;height:2px;width:2em;border-radius:2px;position:relative}.nav-toggle-label span:before,.nav-toggle-label span:after{content:\"\";position:absolute}.nav-toggle-label span:before{bottom:7px}.nav-toggle-label span:after{top:7px}.header-div label{font-size:20px;color:#333;cursor:pointer;display:none}.nav-bar-arrow-down{padding-left:5px}@media (max-width: 830px){.header-div{padding:20px}.header-div label{display:initial}.header-div .navbar{position:absolute;top:100%;left:0;right:0;background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none}.header-div .navbar ul li{width:100%}.header-div .navbar ul li ul{position:relative;width:100%}.header-div .navbar ul li ul li{background:#eee}.header-div .navbar ul li ul li ul{width:100%;left:0}#menu-bar:checked~.navbar{display:initial}}.arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.down{margin-bottom:4px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.UpperCasePipe, name: "uppercase" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nav-bar-example', template: "<div class=\"header-div\">\r\n  <a routerLink=\"\" class=\"logo\">LOGO</a>\r\n\r\n  <input type=\"checkbox\" id=\"menu-bar\" #menubar />\r\n  <!-- <label for=\"menu-bar\">Menu</label> -->\r\n  <label for=\"menu-bar\" class=\"nav-toggle-label\">\r\n    <!-- <span>X</span> -->\r\n    <span></span>\r\n  </label>\r\n\r\n  <nav class=\"navbar\" #navbar>\r\n    <ul>\r\n      <li *ngFor=\"let item of navBarConfig$ | async; let i = index\">\r\n        <!-- <li *ngFor=\"let item of navBarConfig; let i = index\"> -->\r\n        <a *ngIf=\"!item.submenu.length\" routerLink=\"{{ item.parentLink }}\">{{ item.linkText }}</a>\r\n        <a *ngIf=\"item.submenu.length\">\r\n          {{ item.linkText | uppercase }}\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li *ngFor=\"let subItem of item.submenu\">\r\n            <a routerLink=\"{{ subItem.link }}\">{{ subItem.childtext }}</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <!-- <li>\r\n        <a routerLink=\"/home\"\r\n          >Home\r\n          <span class=\"badge-num\"> 0 </span>\r\n        </a>\r\n      </li>\r\n      <li><a routerLink=\"/example/home\">Example</a></li>\r\n      <li><a routerLink=\"/store/home\">NgrxStore</a></li>\r\n      <li><a routerLink=\"/sandbox/home\">Sandbox</a></li>\r\n      <li>\r\n        <a>\r\n          GOTO\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li><a routerLink=\"sandbox/search-city\">Search City Filter</a></li>\r\n          <li><a routerLink=\"sandbox/search-plant\">Search Plant Filter</a></li>\r\n          <li><a routerLink=\"sandbox/us-state\">US States</a></li>\r\n          <li><a routerLink=\"sandbox/search-state\">Search US States</a></li>\r\n        </ul>\r\n      </li> -->\r\n    </ul>\r\n  </nav>\r\n</div>\r\n", styles: ["*{margin:0;padding:0;box-sizing:border-box;text-transform:capitalize;text-decoration:none}.header-div{position:fixed;z-index:1000;top:0;left:0;right:0;height:var(--nav-height);background:var(--primary-color);box-shadow:0 5px 10px #0000001a;padding:0 7%;display:flex;align-items:center;justify-content:space-between}.header-div .logo{font-weight:bolder;font-size:25px;color:#333}.header-div .navbar ul{list-style:none}.header-div .navbar ul li{position:relative;float:left}.header-div .navbar ul li a{font-size:20px;padding:20px;color:#333;display:block}.header-div .navbar ul li a:hover{background:#333;color:#fff}.header-div .navbar ul li a:hover .arrow{border:solid white;border-width:0 3px 3px 0}.header-div .navbar ul li ul{position:absolute;left:0;width:200px;background:#fff;display:none}.header-div .navbar ul li ul li{width:100%;border-top:1px solid rgba(0,0,0,.1)}.header-div .navbar ul li ul li a{font-size:16px;padding:10px;display:block}.header-div .navbar ul li ul li ul{left:200px;top:0}.header-div .navbar ul li:hover>ul{display:initial}#menu-bar{border:1px solid red;display:none}.nav-toggle-label{position:absolute;top:1.5em;right:0;margin-right:1em;height:100%;display:flex;align-items:center}.nav-toggle-label span,.nav-toggle-label span:before,.nav-toggle-label span:after{display:block;background:#333;height:2px;width:2em;border-radius:2px;position:relative}.nav-toggle-label span:before,.nav-toggle-label span:after{content:\"\";position:absolute}.nav-toggle-label span:before{bottom:7px}.nav-toggle-label span:after{top:7px}.header-div label{font-size:20px;color:#333;cursor:pointer;display:none}.nav-bar-arrow-down{padding-left:5px}@media (max-width: 830px){.header-div{padding:20px}.header-div label{display:initial}.header-div .navbar{position:absolute;top:100%;left:0;right:0;background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none}.header-div .navbar ul li{width:100%}.header-div .navbar ul li ul{position:relative;width:100%}.header-div .navbar ul li ul li{background:#eee}.header-div .navbar ul li ul li ul{width:100%;left:0}#menu-bar:checked~.navbar{display:initial}}.arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.down{margin-bottom:4px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.SharedDataService }]; }, propDecorators: { navbarElementRef: [{
                type: ViewChild,
                args: ['navbar']
            }], menubarElementRef: [{
                type: ViewChild,
                args: ['menubar']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBaUMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxTQUFTLEVBQWMsT0FBTyxFQUFFLFNBQVMsRUFBTyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFTdEUsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKaEQsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBSU0sQ0FBQztJQUU1RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDOUQseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QiwwQ0FBMEM7UUFDMUMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCxlQUFlO1FBQ2Isd0ZBQXdGO1FBQ3hGLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQzthQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNmLGdFQUFnRTtZQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7OzZHQS9CVSxlQUFlO2lHQUFmLGVBQWUsa1FDVjVCLHkzREFpREE7NEZEdkNhLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsaUJBQWlCO3dHQUtOLGdCQUFnQjtzQkFBcEMsU0FBUzt1QkFBQyxRQUFRO2dCQUNHLGlCQUFpQjtzQkFBdEMsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTmF2QmFyTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2hhcmVkLm1vZGVsJztcclxuaW1wb3J0IHsgU2hhcmVkRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQuZGF0YS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmF2LWJhci1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2QmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ25hdmJhcicpIG5hdmJhckVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWVudWJhcicpIG1lbnViYXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIG9uRGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBuYXZCYXJDb25maWckOiBPYnNlcnZhYmxlPE5hdkJhck1vZGVsW10+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZERhdGFTZXJ2aWNlOiBTaGFyZWREYXRhU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5hdkJhckNvbmZpZyQgPSB0aGlzLnNoYXJlZERhdGFTZXJ2aWNlLmdldE5hdkJhckNvbmZpZygpO1xyXG4gICAgLy8gdGhpcy5zaGFyZWREYXRhU2VydmljZVxyXG4gICAgLy8gICAuZ2V0TmF2QmFyQ29uZmlnKClcclxuICAgIC8vICAgLnBpcGUodGFwKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpKVxyXG4gICAgLy8gICAuc3Vic2NyaWJlKChyZXMpID0+ICh0aGlzLm5hdkJhckNvbmZpZyA9IHJlcykpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5uYXZiYXJDbGljayA9IGZyb21FdmVudCh0aGlzLm5hdmJhckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJykuc3Vic2NyaWJlKFxyXG4gICAgZnJvbUV2ZW50KHRoaXMubmF2YmFyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTmF2YmFyRml4ZWRDb21wb25lbnQsIG5nQWZ0ZXJWaWV3SW5pdCAuLi4gXCIsIHgpO1xyXG4gICAgICAgIHRoaXMubWVudWJhckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudD8uY2xpY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5vbkRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJoZWFkZXItZGl2XCI+XHJcbiAgPGEgcm91dGVyTGluaz1cIlwiIGNsYXNzPVwibG9nb1wiPkxPR088L2E+XHJcblxyXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm1lbnUtYmFyXCIgI21lbnViYXIgLz5cclxuICA8IS0tIDxsYWJlbCBmb3I9XCJtZW51LWJhclwiPk1lbnU8L2xhYmVsPiAtLT5cclxuICA8bGFiZWwgZm9yPVwibWVudS1iYXJcIiBjbGFzcz1cIm5hdi10b2dnbGUtbGFiZWxcIj5cclxuICAgIDwhLS0gPHNwYW4+WDwvc3Bhbj4gLS0+XHJcbiAgICA8c3Bhbj48L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPG5hdiBjbGFzcz1cIm5hdmJhclwiICNuYXZiYXI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuYXZCYXJDb25maWckIHwgYXN5bmM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8IS0tIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuYXZCYXJDb25maWc7IGxldCBpID0gaW5kZXhcIj4gLS0+XHJcbiAgICAgICAgPGEgKm5nSWY9XCIhaXRlbS5zdWJtZW51Lmxlbmd0aFwiIHJvdXRlckxpbms9XCJ7eyBpdGVtLnBhcmVudExpbmsgfX1cIj57eyBpdGVtLmxpbmtUZXh0IH19PC9hPlxyXG4gICAgICAgIDxhICpuZ0lmPVwiaXRlbS5zdWJtZW51Lmxlbmd0aFwiPlxyXG4gICAgICAgICAge3sgaXRlbS5saW5rVGV4dCB8IHVwcGVyY2FzZSB9fVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtYmFyLWFycm93LWRvd25cIj48aSBjbGFzcz1cImFycm93IGRvd25cIj48L2k+PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHN1Ykl0ZW0gb2YgaXRlbS5zdWJtZW51XCI+XHJcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJ7eyBzdWJJdGVtLmxpbmsgfX1cIj57eyBzdWJJdGVtLmNoaWxkdGV4dCB9fTwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9saT5cclxuICAgICAgPCEtLSA8bGk+XHJcbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9ob21lXCJcclxuICAgICAgICAgID5Ib21lXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlLW51bVwiPiAwIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2V4YW1wbGUvaG9tZVwiPkV4YW1wbGU8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvc3RvcmUvaG9tZVwiPk5ncnhTdG9yZTwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9zYW5kYm94L2hvbWVcIj5TYW5kYm94PC9hPjwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIEdPVE9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWJhci1hcnJvdy1kb3duXCI+PGkgY2xhc3M9XCJhcnJvdyBkb3duXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCJzYW5kYm94L3NlYXJjaC1jaXR5XCI+U2VhcmNoIENpdHkgRmlsdGVyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgcm91dGVyTGluaz1cInNhbmRib3gvc2VhcmNoLXBsYW50XCI+U2VhcmNoIFBsYW50IEZpbHRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCJzYW5kYm94L3VzLXN0YXRlXCI+VVMgU3RhdGVzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgcm91dGVyTGluaz1cInNhbmRib3gvc2VhcmNoLXN0YXRlXCI+U2VhcmNoIFVTIFN0YXRlczwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbGk+IC0tPlxyXG4gICAgPC91bD5cclxuICA8L25hdj5cclxuPC9kaXY+XHJcbiJdfQ==
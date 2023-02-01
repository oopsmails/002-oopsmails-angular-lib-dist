import { Injectable } from '@angular/core';
import { of, Subject, delay, take, switchMap, shareReplay, BehaviorSubject, timer, takeUntil, tap, } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SharedDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.TIMER_REFRESH = 1 * 60 * 60 * 1000;
        this.onDestroy$ = new Subject();
        this._itemData$ = new BehaviorSubject(undefined);
        this.timer$ = timer(this.TIMER_REFRESH, this.TIMER_REFRESH).pipe(takeUntil(this.onDestroy$));
        this.defaultRandomItemSearchRs = {
            resultList: [
                {
                    id: -1,
                    name: '',
                    desc: '',
                    text: '',
                    price: -1,
                    imageUrl: '',
                    quantity: -1,
                },
            ],
        };
        this.dataSource$ = this.getRandomItems(50).pipe(take(1));
        this.itemReplay$ = this._itemData$.pipe(switchMap((resp) => this.dataSource$), 
        // switchMapTo(this.dataSource$),
        shareReplay(1));
        this.timer$.subscribe((x) => this.updateData());
    }
    updateData() {
        this._itemData$.next(undefined);
    }
    getRandomItems(numOfItems, delayInMs) {
        const items = this.makeMockRandomItems(numOfItems);
        if (!delayInMs) {
            return of(items);
        }
        return of(items).pipe(delay(delayInMs));
    }
    searchRandomItems(searchText) {
        if (!searchText || searchText === '' || searchText.length < 1) {
            return of(this.defaultRandomItemSearchRs);
        }
        // if 30000, then browser freezing when rendering search result items because too many
        const items = this.makeMockRandomItems(300).filter((item) => item.name.includes(searchText));
        const result = { resultList: items };
        return of(result).pipe(tap((resp) => console.log('searchText: ', searchText, 'returning: ', resp.resultList.length)), delay(2000));
    }
    makeMockRandomItems(numOfItems) {
        if (!numOfItems) {
            numOfItems = 20;
        }
        const items = [];
        for (let i = 0; i < numOfItems; i++) {
            items.push({
                id: i,
                name: 'randomItem name ' + i,
                desc: 'randomItem desc ' + i,
                text: 'randomItem text ' + i,
                price: i,
                imageUrl: 'randomItem imageUrl ' + i,
                quantity: i,
            });
        }
        return items;
    }
    getNavBarConfig() {
        return this.httpClient.get('assets/config/nav-bar-config.json').pipe(tap((items) => console.log('getNavBarConfig result.size: ', (items && items.length) || '0')));
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
SharedDataService.ɵfac = function SharedDataService_Factory(t) { return new (t || SharedDataService)(i0.ɵɵinject(i1.HttpClient)); };
SharedDataService.ɵprov = i0.ɵɵdefineInjectable({ token: SharedDataService, factory: SharedDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9vb3BzbWFpbHMvMDAxLW9vcHNtYWlscy1hbmd1bGFyLWxpYi10ZXN0L3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvc2hhcmVkLmRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFFTCxFQUFFLEVBQ0YsT0FBTyxFQUNQLEtBQUssRUFDTCxJQUFJLEVBQ0osU0FBUyxFQUNULFdBQVcsRUFFWCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFDVCxHQUFHLEdBQ0osTUFBTSxNQUFNLENBQUM7OztBQU1kLE1BQU0sT0FBTyxpQkFBaUI7SUFzQjVCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFyQjFDLGtCQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGVBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU3QyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7UUFDbEQsV0FBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXpGLDhCQUF5QixHQUErQjtZQUM3RCxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDTixJQUFJLEVBQUUsRUFBRTtvQkFDUixJQUFJLEVBQUUsRUFBRTtvQkFDUixJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO29CQUNaLFFBQVEs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Q0FDSixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQzdGLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7a0ZBNUZVLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTtrREFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgT2JzZXJ2YWJsZSxcclxuICBvZixcclxuICBTdWJqZWN0LFxyXG4gIGRlbGF5LFxyXG4gIHRha2UsXHJcbiAgc3dpdGNoTWFwLFxyXG4gIHNoYXJlUmVwbGF5LFxyXG4gIHN3aXRjaE1hcFRvLFxyXG4gIEJlaGF2aW9yU3ViamVjdCxcclxuICB0aW1lcixcclxuICB0YWtlVW50aWwsXHJcbiAgdGFwLFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOYXZCYXJNb2RlbCwgUmFuZG9tSXRlbSwgUnNTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZERhdGFTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBUSU1FUl9SRUZSRVNIID0gMSAqIDYwICogNjAgKiAxMDAwO1xyXG5cclxuICBwcml2YXRlIG9uRGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIF9pdGVtRGF0YSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KHVuZGVmaW5lZCk7XHJcbiAgcHJpdmF0ZSB0aW1lciQgPSB0aW1lcih0aGlzLlRJTUVSX1JFRlJFU0gsIHRoaXMuVElNRVJfUkVGUkVTSCkucGlwZSh0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kkKSk7XHJcblxyXG4gIHB1YmxpYyBkZWZhdWx0UmFuZG9tSXRlbVNlYXJjaFJzOiBSc1NlYXJjaFJlc3VsdDxSYW5kb21JdGVtPiA9IHtcclxuICAgIHJlc3VsdExpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAtMSxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBkZXNjOiAnJyxcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICBwcmljZTogLTEsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICcnLFxyXG4gICAgICAgIHF1YW50aXR5OiAtMSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XHJcbiAgICB0aGlzLnRpbWVyJC5zdWJzY3JpYmUoKHgpID0+IHRoaXMudXBkYXRlRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXRhU291cmNlJCA9IHRoaXMuZ2V0UmFuZG9tSXRlbXMoNTApLnBpcGUodGFrZSgxKSk7XHJcblxyXG4gIHB1YmxpYyBpdGVtUmVwbGF5JCA9IHRoaXMuX2l0ZW1EYXRhJC5waXBlKFxyXG4gICAgc3dpdGNoTWFwKChyZXNwKSA9PiB0aGlzLmRhdGFTb3VyY2UkKSxcclxuICAgIC8vIHN3aXRjaE1hcFRvKHRoaXMuZGF0YVNvdXJjZSQpLFxyXG4gICAgc2hhcmVSZXBsYXkoMSlcclxuICApO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlRGF0YSgpIHtcclxuICAgIHRoaXMuX2l0ZW1EYXRhJC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21JdGVtcyhudW1PZkl0ZW1zPzogbnVtYmVyLCBkZWxheUluTXM/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFJhbmRvbUl0ZW1bXT4ge1xyXG4gICAgY29uc3QgaXRlbXM6IFJhbmRvbUl0ZW1bXSA9IHRoaXMubWFrZU1vY2tSYW5kb21JdGVtcyhudW1PZkl0ZW1zKTtcclxuICAgIGlmICghZGVsYXlJbk1zKSB7XHJcbiAgICAgIHJldHVybiBvZihpdGVtcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YoaXRlbXMpLnBpcGUoZGVsYXkoZGVsYXlJbk1zKSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hSYW5kb21JdGVtcyhzZWFyY2hUZXh0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJzU2VhcmNoUmVzdWx0PFJhbmRvbUl0ZW0+PiB7XHJcbiAgICBpZiAoIXNlYXJjaFRleHQgfHwgc2VhcmNoVGV4dCA9PT0gJycgfHwgc2VhcmNoVGV4dC5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHJldHVybiBvZih0aGlzLmRlZmF1bHRSYW5kb21JdGVtU2VhcmNoUnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIDMwMDAwLCB0aGVuIGJyb3dzZXIgZnJlZXppbmcgd2hlbiByZW5kZXJpbmcgc2VhcmNoIHJlc3VsdCBpdGVtcyBiZWNhdXNlIHRvbyBtYW55XHJcbiAgICBjb25zdCBpdGVtczogUmFuZG9tSXRlbVtdID0gdGhpcy5tYWtlTW9ja1JhbmRvbUl0ZW1zKDMwMCkuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgICBpdGVtLm5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dClcclxuICAgICk7XHJcbiAgICBjb25zdCByZXN1bHQ6IFJzU2VhcmNoUmVzdWx0PFJhbmRvbUl0ZW0+ID0geyByZXN1bHRMaXN0OiBpdGVtcyB9O1xyXG4gICAgcmV0dXJuIG9mKHJlc3VsdCkucGlwZShcclxuICAgICAgdGFwKChyZXNwKSA9PiBjb25zb2xlLmxvZygnc2VhcmNoVGV4dDogJywgc2VhcmNoVGV4dCwgJ3JldHVybmluZzogJywgcmVzcC5yZXN1bHRMaXN0Lmxlbmd0aCkpLFxyXG4gICAgICBkZWxheSgyMDAwKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG1ha2VNb2NrUmFuZG9tSXRlbXMobnVtT2ZJdGVtcz86IG51bWJlcik6IFJhbmRvbUl0ZW1bXSB7XHJcbiAgICBpZiAoIW51bU9mSXRlbXMpIHtcclxuICAgICAgbnVtT2ZJdGVtcyA9IDIwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbXM6IFJhbmRvbUl0ZW1bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZkl0ZW1zOyBpKyspIHtcclxuICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgbmFtZTogJ3JhbmRvbUl0ZW0gbmFtZSAnICsgaSxcclxuICAgICAgICBkZXNjOiAncmFuZG9tSXRlbSBkZXNjICcgKyBpLFxyXG4gICAgICAgIHRleHQ6ICdyYW5kb21JdGVtIHRleHQgJyArIGksXHJcbiAgICAgICAgcHJpY2U6IGksXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdyYW5kb21JdGVtIGltYWdlVXJsICcgKyBpLFxyXG4gICAgICAgIHF1YW50aXR5OiBpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtcztcclxuICB9XHJcblxyXG4gIGdldE5hdkJhckNvbmZpZygpOiBPYnNlcnZhYmxlPE5hdkJhck1vZGVsW10+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaHR0cENsaWVudC5nZXQoJ2Fzc2V0cy9jb25maWcvbmF2LWJhci1jb25maWcuanNvbicpIGFzIE9ic2VydmFibGU8TmF2QmFyTW9kZWxbXT5cclxuICAgICkucGlwZShcclxuICAgICAgdGFwKChpdGVtcykgPT4gY29uc29sZS5sb2coJ2dldE5hdkJhckNvbmZpZyByZXN1bHQuc2l6ZTogJywgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkgfHwgJzAnKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25EZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5vbkRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
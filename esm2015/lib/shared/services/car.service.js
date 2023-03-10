import { Injectable } from '@angular/core';
import { take, of, delay } from 'rxjs';
import * as i0 from "@angular/core";
export class CarDataService {
    constructor() {
        this.indexSeed = 4; // at least length of following
        this.brand = ['Toyota', 'Chevy', 'GM', 'Buick', 'Honda'];
        this.model = [
            'model1',
            'model2',
            'model3',
            'model4',
            'model5',
            'model6',
            'model7',
            'model8',
        ];
        this.years = ['2018', '2019', '2020', '2021', '2022', '2023'];
        this.dataSource$ = this.getCarItems(50).pipe(take(1));
    }
    getCarItems(numOfItems, delayInMs) {
        const items = this.makeMockItems(numOfItems);
        if (!delayInMs) {
            return of(items);
        }
        return of(items).pipe(delay(delayInMs));
    }
    getSortedCarItems(items, compareFn) {
        if (!compareFn) {
            compareFn = (a, b) => {
                return a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0;
            };
        }
        return compareFn ? items.sort(compareFn) : items;
    }
    makeMockItems(numOfItems) {
        if (!numOfItems) {
            numOfItems = 20;
        }
        const items = [];
        for (let i = 0; i < numOfItems; i++) {
            const brand = this.brand[i % this.brand.length];
            const model = this.model[i % this.model.length];
            const year = this.years[i % this.years.length];
            items.push({
                id: i,
                brand: brand,
                model: model,
                year: year,
            });
        }
        return items;
    }
    getCarGroupsByBrand(cars, sort) {
        const result = [];
        for (const { brand, model, year } of cars) {
            let resultItem = result[brand];
            if (!resultItem) {
                resultItem = { brand: brand, items: [] };
            }
            resultItem.items.push({ brand, model, year });
        }
        return sort
            ? result.sort((a, b) => (a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0))
            : result;
    }
    getCarItemsGroupByBrand(cars) {
        const carGroups = this.getCarGroupsByBrand(cars, true);
        const result = [];
        carGroups.map((groupItem) => {
            const carItems = groupItem.items;
            result.concat(carItems);
        });
        return result;
    }
}
CarDataService.??fac = function CarDataService_Factory(t) { return new (t || CarDataService)(); };
CarDataService.??prov = i0.????defineInjectable({ token: CarDataService, factory: CarDataService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.??setClassMetadata(CarDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL2Nhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFvQixNQUFNLE1BQU0sQ0FBQzs7QUFNckUsTUFBTSxPQUFPLGNBQWM7SUFIM0I7UUFJVSxjQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsK0JBQStCO1FBQzlDLFVBQUssR0FBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxVQUFLLEdBQWE7WUFDeEIsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7U0FDVCxDQUFDO1FBQ00sVUFBSyxHQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwRSxnQkFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBdUV6RDtJQXJFQyxXQUFXLENBQUMsVUFBbUIsRUFBRSxTQUFrQjtRQUNqRCxNQUFNLEtBQUssR0FBVSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtRQUNELE9BQU8sRUFBRSxD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LE1BQU0sR0FBVSxFQUFFLENBQUM7UUFFekIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQW1CLEVBQUUsRUFBRTtZQUNwQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs0RUEvRVUsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO2tEQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlLCBPYnNlcnZhYmxlLCBvZiwgZGVsYXksIE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2FyLCBDYXJHcm91cCwgUmFuZG9tSXRlbSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyRGF0YVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaW5kZXhTZWVkID0gNDsgLy8gYXQgbGVhc3QgbGVuZ3RoIG9mIGZvbGxvd2luZ1xyXG4gIHByaXZhdGUgYnJhbmQ6IHN0cmluZ1tdID0gWydUb3lvdGEnLCAnQ2hldnknLCAnR00nLCAnQnVpY2snLCAnSG9uZGEnXTtcclxuICBwcml2YXRlIG1vZGVsOiBzdHJpbmdbXSA9IFtcclxuICAgICdtb2RlbDEnLFxyXG4gICAgJ21vZGVsMicsXHJcbiAgICAnbW9kZWwzJyxcclxuICAgICdtb2RlbDQnLFxyXG4gICAgJ21vZGVsNScsXHJcbiAgICAnbW9kZWw2JyxcclxuICAgICdtb2RlbDcnLFxyXG4gICAgJ21vZGVsOCcsXHJcbiAgXTtcclxuICBwcml2YXRlIHllYXJzOiBzdHJpbmdbXSA9IFsnMjAxOCcsICcyMDE5JywgJzIwMjAnLCAnMjAyMScsICcyMDIyJywgJzIwMjMnXTtcclxuXHJcbiAgcHVibGljIGRhdGFTb3VyY2UkID0gdGhpcy5nZXRDYXJJdGVtcyg1MCkucGlwZSh0YWtlKDEpKTtcclxuXHJcbiAgZ2V0Q2FySXRlbXMobnVtT2ZJdGVtcz86IG51bWJlciwgZGVsYXlJbk1zPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxDYXJbXT4ge1xyXG4gICAgY29uc3QgaXRlbXM6IENhcltdID0gdGhpcy5tYWtlTW9ja0l0ZW1zKG51bU9mSXRlbXMpO1xyXG4gICAgaWYgKCFkZWxheUluTXMpIHtcclxuICAgICAgcmV0dXJuIG9mKGl0ZW1zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZihpdGVtcykucGlwZShkZWxheShkZWxheUluTXMpKTtcclxuICB9XHJcblxyXG4gIGdldFNvcnRlZENhckl0ZW1zKGl0ZW1zOiBDYXJbXSwgY29tcGFyZUZuPzogKGE6IENhciwgYjogQ2FyKSA9PiBudW1iZXIpOiBDYXJbXSB7XHJcbiAgICBpZiAoIWNvbXBhcmVGbikge1xyXG4gICAgICBjb21wYXJlRm4gPSAoYTogQ2FyLCBiOiBDYXIpID0+IHtcclxuICAgICAgICByZXR1cm4gYS5icmFuZCA+IGIuYnJhbmQgPyAxIDogYi5icmFuZCA+IGEuYnJhbmQgPyAtMSA6IDA7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcGFyZUZuID8gaXRlbXMuc29ydChjb21wYXJlRm4pIDogaXRlbXM7XHJcbiAgfVxyXG5cclxuICBtYWtlTW9ja0l0ZW1zKG51bU9mSXRlbXM/OiBudW1iZXIpOiBDYXJbXSB7XHJcbiAgICBpZiAoIW51bU9mSXRlbXMpIHtcclxuICAgICAgbnVtT2ZJdGVtcyA9IDIwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbXM6IENhcltdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mSXRlbXM7IGkrKykge1xyXG4gICAgICBjb25zdCBicmFuZCA9IHRoaXMuYnJhbmRbaSAlIHRoaXMuYnJhbmQubGVuZ3RoXTtcclxuICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVsW2kgJSB0aGlzLm1vZGVsLmxlbmd0aF07XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLnllYXJzW2kgJSB0aGlzLnllYXJzLmxlbmd0aF07XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIGlkOiBpLFxyXG4gICAgICAgIGJyYW5kOiBicmFuZCxcclxuICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgeWVhcjogeWVhcixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbXM7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJHcm91cHNCeUJyYW5kKGNhcnM6IENhcltdLCBzb3J0PzogYm9vbGVhbik6IENhckdyb3VwW10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBDYXJHcm91cFtdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB7IGJyYW5kLCBtb2RlbCwgeWVhciB9IG9mIGNhcnMpIHtcclxuICAgICAgbGV0IHJlc3VsdEl0ZW0gPSByZXN1bHRbYnJhbmRdO1xyXG4gICAgICBpZiAoIXJlc3VsdEl0ZW0pIHtcclxuICAgICAgICByZXN1bHRJdGVtID0geyBicmFuZDogYnJhbmQsIGl0ZW1zOiBbXSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdEl0ZW0uaXRlbXMucHVzaCh7IGJyYW5kLCBtb2RlbCwgeWVhciB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc29ydFxyXG4gICAgICA/IHJlc3VsdC5zb3J0KChhLCBiKSA9PiAoYS5icmFuZCA+IGIuYnJhbmQgPyAxIDogYi5icmFuZCA+IGEuYnJhbmQgPyAtMSA6IDApKVxyXG4gICAgICA6IHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldENhckl0ZW1zR3JvdXBCeUJyYW5kKGNhcnM6IENhcltdKTogQ2FyW10ge1xyXG4gICAgY29uc3QgY2FyR3JvdXBzOiBDYXJHcm91cFtdID0gdGhpcy5nZXRDYXJHcm91cHNCeUJyYW5kKGNhcnMsIHRydWUpO1xyXG4gICAgY29uc3QgcmVzdWx0OiBDYXJbXSA9IFtdO1xyXG5cclxuICAgIGNhckdyb3Vwcy5tYXAoKGdyb3VwSXRlbTogQ2FyR3JvdXApID0+IHtcclxuICAgICAgY29uc3QgY2FySXRlbXMgPSBncm91cEl0ZW0uaXRlbXM7XHJcbiAgICAgIHJlc3VsdC5jb25jYXQoY2FySXRlbXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIHNvcnRDYXJGbjogT3BlcmF0b3JGdW5jdGlvbjxzdHJpbmcsIENhcltdPiA9IChmaWVsZE5hbWU6IE9ic2VydmFibGU8c3RyaW5nPikgPT5cclxuXHJcbiAgLy8gc29ydENhcnMoY2FyczogQ2FyW10sIHNvcnRGbjopIHtcclxuXHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
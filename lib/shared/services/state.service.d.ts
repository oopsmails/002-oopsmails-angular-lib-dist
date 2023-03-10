import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsCity, UsState } from '../models';
import * as i0 from "@angular/core";
export declare class StateService {
    private httpClient;
    errorMessage?: string;
    statesWithFlag$: Observable<UsState[]>;
    constructor(httpClient: HttpClient);
    getUsStates(): Observable<UsState[]>;
    searchUsStates(term: string): Observable<UsState[]>;
    getUsStateCity(): Observable<UsState[]>;
    getUsStateCitySlice(indexes: number[]): Observable<UsState[]>;
    getUsCities(): any;
    makeUsState(idx: number, stateName: string): UsState;
    makeUsCity(idx: number, cityName: string): UsCity;
    makeUsCityWithStateName(idx: number, cityName: string, stateName: string): UsCity;
    static ɵfac: i0.ɵɵFactoryDef<StateService, never>;
    static ɵprov: i0.ɵɵInjectableDef<StateService>;
}
//# sourceMappingURL=state.service.d.ts.map
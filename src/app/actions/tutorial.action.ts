import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial';

export const ADD_TUTORİAL = '[TUTORİAL] ADD';
export const REMOVE_TUTORİAL = '[TUTORİAL] REMOVE';

export class AddTutorial implements Action {
    readonly type = ADD_TUTORİAL;

    constructor(public payload: Tutorial) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORİAL;

    constructor(public index: number) { }
}

export type Actions = AddTutorial | RemoveTutorial;

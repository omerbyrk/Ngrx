import { Tutorial } from '../models/tutorial';
import * as TutorialActions from '../actions/tutorial.action';

const initialState: Tutorial = {
    name: 'Ömer Bayrak',
    url: 'www.omer.com'
};

export function reducer(states: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORİAL:
            return [...states, action.payload];
        case TutorialActions.REMOVE_TUTORİAL:
            return states.splice(action.index, 1) && states;
        default: return states;
    }
}

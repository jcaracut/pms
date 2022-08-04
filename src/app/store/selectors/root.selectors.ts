import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../state';

export const productFeatureKey = 'poker_boss';

const getState = createFeatureSelector<State>(productFeatureKey);

export const getPlayers = createSelector(getState, (state: State) => state.players);






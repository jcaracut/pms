import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '../state';
import * as actions from '../actions';

export const rootReducer = (state: State, action: Action) => reducer(state, action);

const reducer = createReducer(initialState,

  //Product Reducers
  on(actions.getPlayerInfo, (state) => ({ ...state, isFetching: true })),
  on(actions.getPlayerInfoSuccess, (state, { playerInfo }) => ({ ...state, player: playerInfo })),
  on(actions.getPlayerInfoFail, (state) => ({ ...state, player: null })),

  // on(actions.addVehicle, (state, { vehicle }) => ({ ...state, vehicle: vehicle })),
  // on(actions.updateVehiclesLineInspection, (state, action) => {
  //   let newVehicles = [...state.vehicles];
  //   const objectIndex = newVehicles.findIndex(item => (item.id === 9))

  //   if (objectIndex === -1) return state;
  //   newVehicles[objectIndex] = action.vehicle;
    
  //   return {
  //     ...state,
  //     vehicles: [...newVehicles]
  //   }
  // }),
);


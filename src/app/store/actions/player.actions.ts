import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/features/dealers/models/Player';

enum CustomersActions {
  getPlayerInfo = '[Poker] Player Info',
  getPlayerInfoSuccess = '[Poker] Player Info Success',
  getPlayerInfoFail = '[Poker] Player Info Fail',
}

export const getPlayerInfo = createAction(CustomersActions.getPlayerInfo);
export const getPlayerInfoSuccess = createAction(CustomersActions.getPlayerInfoSuccess, props<{ playerInfo: Player }>());
export const getPlayerInfoFail = createAction(CustomersActions.getPlayerInfoFail);


import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/features/dealers/models/Player';
import { TableProfile } from 'src/app/features/dealers/models/TableProfiles';

enum DealerActions {
  getPlayerInfo = '[Poker] Player Info',
  getPlayerInfoSuccess = '[Poker] Player Info Success',
  getPlayerInfoFail = '[Poker] Player Info Fail',

  getTableProfile = '[Poker] Table Profile',
  getTableProfileSuccess = '[Poker] Table Profile Success',
  getTableProfileFail = '[Poker] Table Profile Fail',
}

export const getTableProfile = createAction(DealerActions.getTableProfile);
export const getTableProfileSuccess = createAction(DealerActions.getTableProfileSuccess, props<{ tableProfiles: TableProfile[] }>());
export const getTableProfileFail = createAction(DealerActions.getTableProfileFail);

export const getPlayerInfo = createAction(DealerActions.getPlayerInfo);
export const getPlayerInfoSuccess = createAction(DealerActions.getPlayerInfoSuccess, props<{ playerInfo: Player }>());
export const getPlayerInfoFail = createAction(DealerActions.getPlayerInfoFail);


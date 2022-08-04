import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/root.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PlayerEffects } from './effects/player.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ pos: rootReducer }),
    EffectsModule.forRoot([PlayerEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class PokerStoreModule { }

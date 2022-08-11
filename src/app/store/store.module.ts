import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/root.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DealerEffects } from './effects/dealer.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ pos: rootReducer }),
    EffectsModule.forRoot([DealerEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class PokerStoreModule { }

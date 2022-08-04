import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, mergeMap } from "rxjs/operators";
import { DealerService } from "src/app/features/dealers/services/dealer.service";

import * as actions from "../actions"

@Injectable()
export class PlayerEffects {

    constructor(
        private dealerSvc: DealerService,
        @Inject(Actions) private actions$
    ) { }

    getProducts = createEffect(() => this.actions$.pipe(
        ofType(actions.getPlayerInfo),
        switchMap(() => {
            return this.dealerSvc.GetPlayerInfo().pipe(
                map(playerInfo => actions.getPlayerInfoSuccess({ playerInfo })),
            );
        }),
    ));

    // saveProduct = createEffect(() => this.actions$.pipe(
    //     ofType(actions.saveProduct),
    //     mergeMap((action) => {
    //         return this.saveProduct.saveProduct(action.product).pipe(
    //             map(saveProduct => actions.saveProduct({ product: product[0] })),
    //         );
    //     }),
    // ));


}
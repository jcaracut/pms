import { Player } from "../features/dealers/models/Player";

export interface State {
    players: Player[],
    player: Player
}

export const initialState: State = {
    players: [],
    player: null
};
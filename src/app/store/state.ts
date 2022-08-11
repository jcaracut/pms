import { Player } from "../features/dealers/models/Player";
import { TableProfile } from "../features/dealers/models/TableProfiles";

export interface State {
    tableProfiles: TableProfile[],
    players: Player[],
    player: Player
}

export const initialState: State = {
    tableProfiles: [],
    players: [],
    player: null
};
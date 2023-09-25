import { selector } from "recoil";
import { sortOptionState } from "./atom";

import { filterLabel, filterdOption } from "../../contance/products";

export const filteredOptionState = selector({
    key: "filteredOptionState",
    get: ({ get }) => {
        const filter = get(sortOptionState);
        const index = filterLabel.indexOf(filter);
        console.log(filterdOption[index]);
        
        return filterdOption[index];
    },
});

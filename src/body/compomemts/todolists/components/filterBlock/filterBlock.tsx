import {FilterStateType} from "../../Todolists.tsx";
import {BasedButton} from "../../../../../shered";

interface Props {
    setFilterState: (filterState: FilterStateType) => void
    filterState: FilterStateType
}

const listButton: FilterStateType[]=["all", "active", "closed"]
const setColor = (filterState: FilterStateType, state: FilterStateType) => {
    return filterState ===  state
}
export const FilterBlock = (props: Props) => {
    const {setFilterState, filterState} = props
    return <div>
        {listButton.map(btn => (<BasedButton
            variant={setColor(filterState, btn)?"primary" : "secondary"}
            onClick={() => setFilterState(btn)}>{btn}
        </BasedButton>))}

    </div>
}
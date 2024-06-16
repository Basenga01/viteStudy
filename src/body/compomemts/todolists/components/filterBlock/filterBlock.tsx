import {FilterStateType} from "../../Todolists.tsx";

interface Props {
    setFilterState: (filterState: FilterStateType) => void
    filterState: FilterStateType
}

const setColor = (filterState: FilterStateType, color: string) => {
    return {background: filterState === filterState ? color : ""}
}
export const FilterBlock = (props: Props) => {
    const {setFilterState, filterState} = props
    return <div>
        <button style={setColor(filterState, "blue")}
                onClick={() => setFilterState("all")}>все
        </button>
        <button style={setColor(filterState, "orange")}
                onClick={() => setFilterState("active")}>актив
        </button>
        <button style={setColor(filterState, "green")}
                onClick={() => setFilterState("closed")}>закрыто
        </button>
    </div>
}
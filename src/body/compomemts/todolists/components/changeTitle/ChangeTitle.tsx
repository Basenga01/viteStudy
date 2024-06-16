import {Dispatch, SetStateAction, useState} from "react";
import {TodolistType} from "../../Todolists.tsx";

interface PropsType {
    title: string
    todolistid: string
    setTodolists: Dispatch<SetStateAction<TodolistType[]>>
}

export function ChangeTitle({title, todolistid, setTodolists}: PropsType) {

    const [titleIsVisible, setTitleIsVisible] = useState<boolean>(true)
    const [value, setValue] = useState<string>(title)


    function onSavetitle() {
        setTodolists(prevState => {
            const newArr = prevState.map((element) => element.id === todolistid ? {...element, title: value} : element)

            return newArr
        })
        setTitleIsVisible(true)
    }

    return <div>
        {titleIsVisible ? <div>
                {title}
                <button onClick={() => {
                    setTitleIsVisible(false)
                }}>change Title
                </button>
            </div>
            : <div>
                <input value={value} onChange={(event) => {
                    setValue(event.target.value)
                }}/>
                <button onClick={() => {
                    setTitleIsVisible(true)
                    setValue(title)
                }}>Cancel
                </button>
                <button onClick={onSavetitle}>Save</button>
            </div>}

    </div>
}
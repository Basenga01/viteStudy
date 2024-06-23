import {useState} from "react";

interface PropsType {
    title: string
    saveTitle: (value: string, callback: () => void) => void
}

export function ChangeTitle({title, saveTitle}: PropsType) {

    const [titleIsVisible, setTitleIsVisible] = useState<boolean>(true)
    const [value, setValue] = useState<string>(title)


    // function onSavetitle() {
    //     setTodolists(prevState => {
    //         const newArr = prevState.map((element) => element.id === todolistid ? {...element, title: value} : element)
    //
    //         return newArr
    //     })
    //     setTitleIsVisible(true)
    // }

    function onCloseInput() {
        setTitleIsVisible(true)
    }

    function onSave() {
        saveTitle(value, onCloseInput)
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
                <button onClick={onSave}>Save</button>
            </div>}

    </div>
}
import {useState} from "react";
import {BasedButton} from "../../../../../shered";
import css from './changeTitle.module.css'

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

    return <div className={css.container}>
        {titleIsVisible ? <div>
                <span className={css.title}></span>
                <BasedButton onClick={() => {
                    setTitleIsVisible(false)
                }}>change Title
                </BasedButton>
            </div>
            : <div>
                <input value={value} onChange={(event) => {
                    setValue(event.target.value)
                }}/>
                <BasedButton onClick={() => {
                    setTitleIsVisible(true)
                    setValue(title)
                }}>Cancel
                </BasedButton>
                <BasedButton onClick={onSave}>Save</BasedButton>
            </div>}

    </div>
}
// import {useState} from "react";
// import css from './Star.module.css'
//
// interface Props{
//     index: number
//     onClick: (index: number) => void
//     isActive: boolean
// }
//
// const ACTIVE_STAR = "&#9734;"
// const DEFAULT_STAR = "&#9733;"
// export const Star = (props:Props) =>{
//     const {index, onClick, isActive} = props
//     const initialState = isActive ? ACTIVE_STAR : DEFAULT_STAR
//     const [state, setState] = useState(initialState)
//
//     function onMouseLeave(){
//         setState(initialState)
//     }
//     function onMouseMove(){
//         setState(DEFAULT_STAR)
//     }
//
//     return <span className={css.star} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove}
//                  dangerouslySetInnerHTML={{__html: initialState}} onClick={()=> onClick(index)} />
// }

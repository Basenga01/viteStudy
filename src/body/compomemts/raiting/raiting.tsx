// import {Star} from "../star/star.tsx";
// import {useState} from "react";
//
// export const Rating = () =>{
//
//     const [selectedRating,setSelectedRating] = useState(0)
//     const onClickStar=(starIndex: number)=>{
//         setSelectedRating(starIndex)
//         console.log("я звезда", starIndex)
//     }
//
//     const getStateIsActive=(index, raiting)=>{
//         if(raiting >= index){
//             return true
//         }
//         else {
//             return false
//         }
//     }
//
//     return <div>
//     <Star index={1} onClick={onClickStar} isActive={getStateIsActive(1, selectedRating)} />
//     <Star index={2} onClick={onClickStar} isActive={getStateIsActive(2, selectedRating)} />
//     <Star index={3} onClick={onClickStar} isActive={getStateIsActive(3, selectedRating)} />
//     <Star index={4} onClick={onClickStar} isActive={getStateIsActive(4, selectedRating)} />
//     <Star index={5} onClick={onClickStar} isActive={getStateIsActive(5, selectedRating)} />
//     </div>
// }

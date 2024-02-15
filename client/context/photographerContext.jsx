// import axios from 'axios';
// import { createContext, useState, useEffect } from 'react';

// export const PhotographerContext = createContext({})

// export function PhotographerContextProvider({ children }) {
//     const [photographer, setPhotographer] = useState(null);
//     useEffect(() => {
//         if (!photographer) {
//             axios.get('/dashboard/photographer').then(({ data }) => {
//                 setPhotographer(data)
//             })
//         }
//     }, [])
//     return (
//         <PhotographerContext.Provider value={{photographer, setPhotographer}}>
//             {children}
//         </PhotographerContext.Provider>
//     )
// }
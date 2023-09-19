import { Routes, Route } from  'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Edit } from '../pages/Edit';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}
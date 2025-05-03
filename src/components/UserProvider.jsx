
import React from 'react';
import UserContext from './userContext';
const UserProvider =  ({children})=> {
    const userName ="Abdi Gashahun";
    return(
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;
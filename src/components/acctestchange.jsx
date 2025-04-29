import { useState, useContext, useEffect } from "react";

import { UserContext } from "../App";
export default function Acctestchange() {
    const { setType , accountType, setLogged} = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
        if(accountType === ''){
            setLogged(false)
        }
    }, [accountType])
    return (
        <form action="" onSubmit={(e) => e.preventDefault()} style={{zIndex: 1000,position: "fixed", top: '20%', left: 0, padding: '10px', backgroundColor: 'gray', border: '1px solid black', color: 'white'}}>
        <select onSelect={(e) => setSelectedOption(e.target.value)} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="" selected>Sign out Account</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
        </select>
        <button onClick={() => {
            setType(selectedOption)
            if(selectedOption !== ''){
                setLogged(true)
            }
            }}>Select</button>   
        <h2>Роль аккаунта: {accountType}</h2>
        </form>
    )
}

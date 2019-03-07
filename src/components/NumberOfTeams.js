import React, { useState } from 'react'

export default function({ setNumberOfTeams }){
    const [numberOfTeams, updateNumberOfTeams] = useState(null)

    function onSubmit(e) {
        e.preventDefault()
        setNumberOfTeams(numberOfTeams)
    }
    return ( 
        <form onSubmit={onSubmit}>
            Choose Number of Teams {numberOfTeams}
            <input type="number" name="numberOfTeams" id="n" max={20} onChange={({ target }) => updateNumberOfTeams(+target.value)} />
        </form>
    )
}
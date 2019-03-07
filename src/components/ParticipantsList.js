import React, { useContext } from 'react';
import { AppContext } from '../App';


const ParticipantsList = ({ participants=[], addParticipant, removeParticipant}) => {
    const { modals, setParticipant } = useContext(AppContext)
    
    return (
        <div className="participants participants__list">
            {
                participants.map( p => (
                    <div key={p.id} className="participant" onClick={()=>{
                        modals.participants.openModal()
                        setParticipant(p)
                    }}>
                        <span>{p.name}</span>
                    </div>
                ) )
            }
            <button className="participant" onClick = {()=>{ addParticipant() }}>
                <span>Add Team</span>
            </button>
        </div>
    )
}

// 2067015415x014 call for WorkAtHome for dad
export default ParticipantsList
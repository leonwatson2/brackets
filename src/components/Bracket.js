import React, { useContext } from 'react';
import { MatchUps, MatchUp, Round, Winners } from '../layout';
import NumberOfTeams from './NumberOfTeams';
import { AppContext } from '../App';

export default function Bracket({ bracket, setNumberOfTeams }){
    
    const { setMatchUp, modals } = useContext(AppContext)
    if (!bracket) {
        return <NumberOfTeams setNumberOfTeams={setNumberOfTeams}/>
    }

    return (
        <div className="bracket">
            {
                bracket.rounds.map((round, i) => {
                    return (
                        <Round>
                                    {
                                        groups(2,round.matchUps).map((m) => {
                                            return (
                                                <Winners final={1 === round.matchUps.length}>
                                                    <MatchUps>
                                                        <MatchUp participants={m[0].participants} 
                                                            onClick={()=>{ 
                                                                console.log(modals, m)
                                                                setMatchUp(m[0]);
                                                                modals.matchUps.openModal()
                                                            }}/>
                                                        {m[1] && <MatchUp participants={m[1].participants} 
                                                            onClick={()=>{ 
                                                                console.log(modals, m)
                                                                setMatchUp(m[1]); 
                                                                modals.matchUps.openModal() 
                                                            }}/> }
                                                    </MatchUps>
                                                </Winners>
                                            )
                                        })
                                    }
                        </Round>
                    )
                })
            }
        </div>
    )
}
var groups = (groupSize, someArray) => someArray.map(
    (item, index) => {
        return index % groupSize === 0 ? someArray.slice(index, index + groupSize) : null; 
    }).filter(item => item);
  
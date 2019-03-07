import React, { useState } from 'react';
import './App.sass';
import ParticipantsList from './components/ParticipantsList';
import { useParticipants, useModal } from './hooks';
import { ParticipantModal } from './components/ParticipantModal';
import Bracket from './components/Bracket';
import { createRounds } from './func';
import MatchUpModal from './components/MatchUpModal';

export const AppContext = React.createContext()

function App (){
    const [ participants, addParticipant, removeParticipant, updateParticipants ] = useParticipants([])
    const [ participantModal, pOpenModal, pCloseModal, ] = useModal()
    const [ matchUpModal, mOpenModal, mCloseModal, ] = useModal()
    const updateMatchUp = (m)=>{
      console.log(m)
    }
    const modals = {
      participants: {
        openModal: pOpenModal,
        closeModal: pCloseModal
      },
      matchUps: {
        openModal: mOpenModal,
        closeModal: mCloseModal
      }
    }
    const [ selectedParticipant, setParticipant ] = useState(null)
    const [ selectedMatchUp, setMatchUp ] = useState(null)
    const [ bracket, setBracket ] = useState(null)
    function setupBracketsAndTeams(numberOfTeams){
      const rounds = createRounds(numberOfTeams)
      setBracket({ rounds })
    }
    return (
      <AppContext.Provider value={ { modals, setParticipant, updateParticipants, setMatchUp } }>
        <ParticipantsList participants={participants} addParticipant={addParticipant} removeParticipant={removeParticipant}/> 
          <Bracket bracket={bracket} setNumberOfTeams={setupBracketsAndTeams} />
        <ParticipantModal open={participantModal.open} selectedParticipant={selectedParticipant} />
        <MatchUpModal open={matchUpModal.open} selectedMatchUp={selectedMatchUp} />
      </AppContext.Provider>

    );
  }

export default App;

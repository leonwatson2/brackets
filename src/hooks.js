import { useState, useReducer } from 'react'

export const useParticipants = (initalParticipants = []) => {
    const [ participants, updateParticipants ] = useState([])

    const addParticipant = ( newParticipant = { id: Date.now(), name: 'Mike' } ) => {
        updateParticipants( participants.concat(newParticipant) )
    }

    const removeParticipant = ( participantId ) => {
        updateParticipants( participants.filter(p => p.id !== participantId) )
    }
    
    const updateParticipant = ( newParticipant) => {
        const newParticipants = participants.map(p => {
            if(p.id !== newParticipant.id)
                return p
            return {
               ...newParticipant
            }
        })
        updateParticipants(newParticipants)
    }



    return [ participants, addParticipant, removeParticipant, updateParticipant ]
}

export const useModal = ({ open = true } = {}) => {
    const [modal, dispatch] = useReducer(modalReducer, { open: false })
    
    function modalReducer(state, action){
        switch(action.type){
            case 'OPEN_MODAL':
                return {
                    ...state,
                    open: true,
                }
            case 'CLOSE_MODAL':
                return {
                    ...state, 
                    open: false,
                }
            default: return state
        }
    }

    const openModal = () => {
        dispatch({ type: 'OPEN_MODAL' })
    }
    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return [ modal, openModal, closeModal ]
}
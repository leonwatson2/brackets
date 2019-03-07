import React, { useContext, useRef, useEffect } from 'react'
import cx from 'classnames'
import { AppContext } from '../App';

export const ParticipantModal = ({ open = true, selectedParticipant } ) => {
    const { modals:{ participants: { closeModal } }, updateParticipants, setParticipant } = useContext(AppContext)
    
    const nameRef = useRef()

    useEffect( () => {
        if(open && nameRef.current)
            nameRef.current.focus()
    }, [open])

    const onNameChange = (e) => {
        setParticipant({
            ...selectedParticipant,
            name: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        updateParticipants(selectedParticipant)
        closeModal()
    }
    if(!selectedParticipant)    
        return <div className="modal"></div>
    return (
        <div className={cx('modal', { open })}>
            <div className="modal-body">
                <div className="modal-title">
                    { 'Update Team' }
                    <div class="close" onClick={closeModal}>x</div>
                </div>
                <div className="modal-content">
                    <form onSubmit={onSubmit}>
                        <div className="input-group">
                            <label htmlFor="teamName">Team Name</label>
                            <input type="text" ref={nameRef} name="teamName" value={selectedParticipant.name} placeholder={'Team Name'} onChange={onNameChange}/>
                        </div>
                        <div className="actions">
                            <button className="btn confirm" onClick={onSubmit}>Confirm</button>
                            <button className="btn remove" onClick={onSubmit}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
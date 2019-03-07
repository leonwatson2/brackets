import React, { useContext, useRef, useEffect } from 'react'
import cx from 'classnames'
import { AppContext } from '../App';

export default function MatchUpModal({ selectedMatchUp, open }) {
    const { modals: { matchUps: { closeModal } }, updateMatchUp, setParticipant } = useContext(AppContext)

    const nameRef = useRef()

    useEffect(() => {
        if (open)
            // nameRef.current.focus()
            console.log(nameRef)
    }, [open])

    const onParticipantNameChange = (index) => (e) => {
        const participants = [,]
        participants[index].name = e.target.value
        participants[!index] = selectedMatchUp.participants[!index].name
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateMatchUp(selectedMatchUp)
        closeModal()
    }
    if (!selectedMatchUp)
        return <div className="modal"></div>
    const [firstParticipant, secondParticipant] = selectedMatchUp.participants

    return (<div className={cx('modal', { open })}>
        <div className="modal-body">
            <div className="modal-title">
                {'Update Team'}
                <div class="close" onClick={closeModal}>x</div>
            </div>
            <div className="modal-content">
                <form onSubmit={onSubmit}>
                    <h1>Teams</h1>
                    <div className="input-group">
                        <input type="text" ref={nameRef} name="teamName" value={firstParticipant.name} placeholder={'Team Name'} onChange={onParticipantNameChange(0)} />
                    </div>
                    {
                        secondParticipant ?
                            (
                                <div className="input-group">
                                    <input type="text" name="teamName" value={firstParticipant.name} placeholder={'Team Name'} onChange={onParticipantNameChange(1)} />
                                </div>
                            ) : (
                                <div> Add Team </div>
                            )
                    }
                    <div className="actions">
                        <button className="btn confirm" onClick={onSubmit}>Confirm</button>
                        <button className="btn remove" onClick={onSubmit}>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}
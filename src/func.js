const roundToNext = number => roundedNumber => {
    const remainder = (roundedNumber % number)
    if(remainder === 0) return roundedNumber
    return number - remainder + roundedNumber 
}
export const getNumberOfMathupsForNextRound = (numberOfParticipants) => {
    if(numberOfParticipants < 3) return 0;
    return roundToNext(4)(numberOfParticipants)/4   
}
export const getNumberOfMathupsForCurrentRound = (numberOfParticipants) => {
    if(numberOfParticipants < 2) return 0;
    return roundToNext(2)(numberOfParticipants)/2   
}

export const createMatchUps = (numberOfMatchups) => {
    let matchups = []
    for(let i = 0; i < numberOfMatchups; i++){
        matchups = matchups.concat(createMatchUp())
    }
    return matchups
}

export const createMatchUp = (participants = [{}, {}]) => {
    return {
        participants,
        winner: null,
        points: [0, 0],
        time: '',
        delayed: false
    }
}

export const updateMatchUpParticipant = (matchUp, participantIndex, newParticipantId) => {
    const newParticipants = matchUp.participants.map( (p, index) => {
        if(index === participantIndex){
            return { id: newParticipantId }
        }
        return p
    } )
    return {
        ...matchUp,
        participants: newParticipants
    }
}

export const createRounds = (numberOfParticipants = 2) => {

    if(numberOfParticipants === 0)
        return []

    function _createRounds(numberOfParticipants, rounds){
        let numberOfMatchups = getNumberOfMathupsForCurrentRound(numberOfParticipants)
        const matchUps = createMatchUps(numberOfMatchups)
        if(numberOfParticipants > 0 && matchUps.length !== 0) {
            const nextNumberOfParticipants = numberOfParticipants / 2 > .5 ? Math.round(numberOfParticipants/2) : 0
            if(rounds)
                return _createRounds(nextNumberOfParticipants, [ ...rounds, { matchUps } ])
            return _createRounds(nextNumberOfParticipants, [ { matchUps } ])
        }
        return rounds
    }

    return _createRounds(numberOfParticipants) 
}
 //?
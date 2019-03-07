import { getNumberOfMathupsForNextRound, createMatchUps, createMatchUp, createRounds, updateMatchUpParticipant } from "./func";

describe('making matchups', ()=>{
    it('should return the correct number of matchups for next round', ()=>{

        expect(getNumberOfMathupsForNextRound(2)).toEqual(0)
        expect(getNumberOfMathupsForNextRound(3)).toEqual(1)
        expect(getNumberOfMathupsForNextRound(4)).toEqual(1)
        expect(getNumberOfMathupsForNextRound(5)).toEqual(2)
        expect(getNumberOfMathupsForNextRound(6)).toEqual(2)
        expect(getNumberOfMathupsForNextRound(7)).toEqual(2)
        expect(getNumberOfMathupsForNextRound(8)).toEqual(2)
        expect(getNumberOfMathupsForNextRound(9)).toEqual(3)
        expect(getNumberOfMathupsForNextRound(10)).toEqual(3)
        expect(getNumberOfMathupsForNextRound(11)).toEqual(3)
        expect(getNumberOfMathupsForNextRound(12)).toEqual(3)
        expect(getNumberOfMathupsForNextRound(13)).toEqual(4)
        expect(getNumberOfMathupsForNextRound(14)).toEqual(4)
        expect(getNumberOfMathupsForNextRound(15)).toEqual(4)
        expect(getNumberOfMathupsForNextRound(16)).toEqual(4)
    })

    it('should create the correct number of matchups', ()=>{
        expect(createMatchUps(3).length).toEqual(3)
        expect(createMatchUps(4).length).toEqual(4)
        expect(createMatchUps(5).length).toEqual(5)
        expect(createMatchUps(30).length).toEqual(30)
    })

    it('should create a black match up', ()=>{
        const expected = {
            winner: null,
            participants: [{}, {}],
            points: [0, 0],
            time: '',
            delayed: false
        }
        expect(createMatchUp()).toMatchObject(expected)
    })
    it('should create a match up with inital name', ()=>{
        const expected = {
            winner: null,
            participants: [{ id: 0 }, { id: 1 }],
            points: [0, 0],
            time: '',
            delayed: false
        }
        expect(createMatchUp(expected.participants)).toMatchObject(expected)
    })
    it('should create a match up with blank second participant', ()=>{
        const expected = {
            winner: null,
            participants: [{ id: 0 }],
            points: [0, 0],
            time: '',
            delayed: false
        }
        expect(createMatchUp([expected.participants[0]])).toMatchObject(expected)
    })
    it('should create the correct number of rounds for a number of participants', ()=>{
        expect(createRounds(0).length).toEqual(0)
        
        let participants = [{id: 0}, {id: 1},]
        expect(createRounds(2).length).toEqual(1)
        
        participants = [{id: 0}, {id: 1},{id: 2},]
        expect(createRounds(3).length).toEqual(2)
        
        participants = [{id: 0}, {id: 1},{id: 2},{id: 3},]
        expect(createRounds(4).length).toEqual(2)
        
        participants = [{id: 0}, {id: 1},{id: 2},{id: 3},{id: 4}, {id: 5},]
        expect(createRounds(6).length).toEqual(3)
        
        participants = [{id: 0}, {id: 1},{id: 2},{id: 3},{id: 4}, {id: 5},{id: 6},{id: 36},]
        expect(createRounds(8).length).toEqual(3)
        
        participants = [{id: 0}, {id: 1},{id: 2},{id: 3},{id: 4}, {id: 5},{id: 6},{id: 36},{id: 4}, {id: 5},{id: 6},{id: 36},]
        expect(createRounds(12).length).toEqual(4)
    })
})

describe('updating match ups', () => {
    it('should update the second participant\'s id to 12', () => {
        const matchUp = createMatchUp([ { id:1 }, { id:2 } ])
        const result = updateMatchUpParticipant(matchUp, 1, 12)
        expect(result.participants[1].id).toEqual(12)
    })
    it('should update the first participant\'s id to 12', () => {
        const matchUp = createMatchUp([ { id:1 }, { id:2 } ])
        const result = updateMatchUpParticipant(matchUp, 0, 12)
        expect(result.participants[0].id).toEqual(12)
    })
})
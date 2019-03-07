import React from 'react';
import cx from 'classnames'

const createWrapperComponent = (classes) => (props) => {
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export const Round = createWrapperComponent('round')
export const MatchUps = createWrapperComponent('matchups')

export const MatchUp = ({ participants = [{name:''}, {name:''}], winner = 0, onClick }) => {
     return (
        <div className="matchup" onClick={onClick}>
          <div className="participants">
            <div className={cx("participant", {winner: winner === 0})}><span>{participants[0].name ? participants[0].name : ''}</span></div>
            <div className={cx("participant", {winner: winner === 1})}><span>{participants[1].name ? participants[1].name : ''}</span></div>
          </div>
        </div>
     )
}

export const Winners = (props) => {
  return (
    <div className="winners">
      {props.children}
      {
        !props.final && 
        <div className="connector">
          <div className="merger"></div>
          <div className="line"></div>
        </div>
      }
    </div>
  )
}
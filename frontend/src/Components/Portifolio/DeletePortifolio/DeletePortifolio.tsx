import React, { SyntheticEvent } from 'react'
interface Props {
  onPortifolioDelete: (e: SyntheticEvent) => void;
}

const DeletePortifolio = ({onPortifolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortifolioDelete}>
        <input hidden={true} value={portfolioValue}/>
        <button>X</button> 
      </form>
    </div>
  )
}

export default DeletePortifolio;
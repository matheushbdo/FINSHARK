import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

interface Props {
    portfolioValues: string[] 
    onPortifolioDelete: (e: SyntheticEvent) => void;
}

const ListPorfolio = ({ portfolioValues, onPortifolioDelete }: Props) => {
  return (
    <>
        <h3>My Portifolio</h3>
        <ul>
            {portfolioValues &&
                portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValue={portfolioValue}
                     onPortifolioDelete={onPortifolioDelete}/>;
            })}
        </ul>
    </>
  )
}

export default ListPorfolio
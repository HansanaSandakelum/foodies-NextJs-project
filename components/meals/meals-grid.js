import React from 'react'
import classe from './meals-grid.module.css'

const MealsGrid = (meals) => {
  return (
    <ul className={classe.meals}>
        {meals.map(meal => <li key={meal.id}></li>)}
    </ul>
  )
}

export default MealsGrid
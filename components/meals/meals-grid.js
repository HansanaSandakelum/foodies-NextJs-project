import React from 'react'
import classe from './meals-grid.module.css'
import MealItem from './meal-item'

const MealsGrid = ({meals}) => {
  return (
    <ul className={classe.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
    </ul>
  )
}

export default MealsGrid
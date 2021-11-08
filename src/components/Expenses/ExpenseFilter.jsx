import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter=(props)=> {

    const dropdownChangeHAndler =(event)=>{
            props.onSelectedYear(event.target.value);
    }

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter By Year</label>
                <select className='expense-select' value={props.selected} onChange={dropdownChangeHAndler} >
                    <option className='option' value='2022'></option>
                    <option className='option' value='2021'></option>
                    <option className='option' value='2020'></option>
                    <option className='option' value='2019'></option>
                </select>            
            </div>
        </div>
    )


}
export default ExpenseFilter
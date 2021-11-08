import React, {useState} from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2020')

        const selectYearHandler=(selectedYear)=>{
            console.log('Expense.js');
            console.log(selectedYear);
            setFilteredYear(selectedYear)
        }
        const filteredExpenses = props.item.filter(expense=> {
            return expense.date.getFullYear().toString() === filteredYear;

        })
        
        return(
         
               
                <Card className='expenses'>
                    <ExpenseFilter
                     selected={filteredYear}
                     onSelectedYear={selectYearHandler}
                     />
                   
                   <ExpenseList items={filteredExpenses}/>
                    
                </Card>
          
        )
}
export default Expenses
import React from 'react' 
import GitHubCalendar from 'react-github-calendar' 

 
 
 
const Cal = () => { 
  const selectLastHalfYear = contributions => { 
    const currentYear = new Date().getFullYear(); 
    const currentMonth = new Date().getMonth(); 
    const shownMonths = 9; 
 
    return contributions.filter(day => { 
      const date = new Date(day.date); 
      const monthOfDay = date.getMonth(); 
 
      return ( 
        date.getFullYear() === currentYear && 
        monthOfDay > currentMonth - shownMonths && 
        monthOfDay <= currentMonth 
      ); 
    }); 
  }; 
 
  return ( 
    <div> 
      <h2 className="section__title different">DAYS I CODE</h2> 
      <div className='github_Calender'> 
 
        <GitHubCalendar style={{margin:"auto"}} 
          username='shubhamgohad221997' 
           
          transformData={selectLastHalfYear} 
          hideColorLegend 
        /> 
      </div> 
    </div> 
 
 
  ) 
} 
 
 
 
export default Cal
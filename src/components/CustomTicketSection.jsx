import React from 'react';
import { use } from 'react';
import Ticket from './Ticket';

const CustomTicketSection = ({fetchtickets,count,setCount,task,setTask,restask}) => {
  const tickets = use(fetchtickets)

  
  const filteredTickets = tickets.filter(
    t => !restask.some(r => r.title === t.title)
  )

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
      {
        filteredTickets.map(ticket => (
          <Ticket 
            key={ticket.id}
            ticket={ticket} 
            count={count} 
            setCount={setCount} 
            task={task} 
            setTask={setTask} 
          />
        ))
      }
    </div>
  );
};

export default CustomTicketSection;

import './App.css'
import { ToastContainer} from 'react-toastify';
import NavBar from './components/NavBar';
import CustomTicketSection from './components/CustomTicketSection';
import { Suspense } from 'react';
import Inprogresssection from './components/Inprogresssection';
import Container from './components/Container';
import { useState } from 'react';
import Tasksection from './components/Tasksection';
import Resolvesection from './components/Resolvesection';
import Footer from './components/Footer';
import Resolvedtusksection from './components/Resolvedtusksection';
 const fetchlink=async()=>{
    const res=await fetch('/ticketdetails.json')
    return res.json()
  }
  const fetchtickets=fetchlink()

function App() {
 
  const [restask, setRestask] = useState([]); 
 const[count,setCount]=useState(0)
const[resolved,setResolved]=useState(0)
 const[task,setTask]=useState([])



const removeticket = (p) => {
  const filterdata = task.filter(tkt => tkt.title !== p.title);
  setTask(filterdata);
  setRestask([...restask, p]);

  fetchtickets.then(allTickets => {
    const updated = allTickets.filter(tkt => tkt.title !== p.title);
   
  });
};






  return (
    <>
     <NavBar></NavBar>
     <div  className='flex md:flex-row flex-col items-center justify-between w-11/12 mx-auto gap-5 py-10'>
     <Inprogresssection count={count}></Inprogresssection>
      <Resolvesection resolved={resolved}></Resolvesection>
     </div>
      
     
     
    <Container>
       
     
          {/* custom   */}
      <Suspense>
         <CustomTicketSection 
   task={task} 
   setTask={setTask} 
   fetchtickets={fetchtickets} 
   count={count} 
   setCount={setCount}
   restask={restask}  
/>


      </Suspense>
         
     <div className='w-[450px]'>
       <Tasksection task={task} removeticket={removeticket} count={count} setCount={setCount} resolved={resolved} setResolved={setResolved}
       ></Tasksection>
   <Resolvedtusksection restask={restask}></Resolvedtusksection>

     </div>
    </Container>
   
<Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App

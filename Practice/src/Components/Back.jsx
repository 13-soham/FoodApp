import { useNavigate } from 'react-router-dom'

const Back = () => {
    let Navigate = useNavigate();
  return (
    <div className='mt-2'>
        <button onClick={()=>{
            Navigate(-1);
        }} className='buttonProp text-white bg-red-900!'>Back</button>
    </div>
  )
}

export default Back
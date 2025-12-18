import React , { useRef } from 'react'

const UncontrolledComponent = () => {

    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Welcome ${Ref1.current.value} ${Ref2.current.value}`)
    }
  return (
    <div>
        first name :<input type="text" ref={Ref1}/><br/>
        last name :<input type="text" ref={Ref2} /><br/>
        <button type="submit" onClick={handleSubmit}>Submit Form</button>
    </div>
  )
}

export default UncontrolledComponent
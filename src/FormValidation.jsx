import React ,{useState} from 'react'

const FormValidation = () => {
      const [myData, setmyData] = useState({
            fname: "",
            lname: "",
            
        });
        
        const [errors,seterrors] = useState({
            fnameError: "",
            lnameError: "",
        })
        const changeData = (e) => {
            const { name, value } = e.target;
            setmyData({
                ...myData,
                [name]: value
            });


            if(name=="fname"){
                seterrors((pre)=>({
                     ...pre,
                    fnameError:value ? "":"First name field is mandatory to fill"
                }))
            }

            if(name=="lname"){
                seterrors((pre)=>({
                     ...pre,
                    lnameError:value ? "":"Last name field is mandatory to fill"
                }))
            }

             
        };
    
        const submitForm = (e) => {


            e.preventDefault();

            let fnameError ="";
            let lnameError ="";

            if(!myData.fname){
                fnameError = "First name field is mandatory to fill"
            }
            
            if(!myData.lname){
                lnameError = "Last name field is mandatory to fill"
            }

            seterrors({
                fnameError ,
                lnameError  
            })

            if(!fnameError && !lnameError){
                alert(`${myData.fname} ${myData.lname} `);
            }


            
        };
  return (
    <div>
        <form onSubmit={submitForm}>
                First Name:
                <input
                    type='text'
                    value={myData.fname}
                    onChange={changeData}
                    name="fname"
                /><br />
                <span  style={{ color: "red" }}>{errors.fnameError}</span><br />
                Last Name:
                <input
                    type='text'
                    value={myData.lname}
                    onChange={changeData}
                    name="lname"
                /><br />
                 <span  style={{ color: "red" }}>{errors.lnameError}</span><br />
               
                <button>Submit Form</button>
            </form>

            <h2>First name: {myData.fname}</h2>
            <h2>Last name: {myData.lname}</h2>
          
    </div>
  )
}

export default FormValidation  
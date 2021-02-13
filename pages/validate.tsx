import React from 'react';
import passwordValidator from "password-validator";

const Validate = () =>{
    const schema = new passwordValidator();
    schema  
        .is().min(4)
        .is().max(10)
        // .has().uppercase()
        .has().lowercase()
        // .has().digits(2)
        .has().not().spaces()
        .is().not().oneOf(['1234']);
    const here = () =>{
        console.log(schema.validate('1234',{list:true}));
        console.log(schema.validate('helloworrlddd'));
        console.log(schema.validate('sample'));
    }
    return(
        <>
            <button onClick={e => here()}>Click to Validate</button>
        </>
    )
}
export default Validate;
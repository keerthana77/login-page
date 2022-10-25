import { useState } from "react";
import ResetSuccess from './ResetSuccess';
import ResetFailure from './ResetFailure';

const Reset = (props) => {
    const [input, setInput] = useState({newPassword: '', confirmPassword: ''});
    const [error, setError] = useState({newPassword: '', confirmPassword: ''});
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isResetDone, setIsResetDone] = useState(false);
    const [resetStatus, setResetStatus] = useState('');
    //eslint-disable-next-line
    const passwordRegex = /^(?=.*[0-9]).{8}/;
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev, 
            [name]: value
        }));
        validateInput(e);
    }
    const validateInput = (e) => {
        let { name, value } = e.target;
        setError((prev) =>{
            const stateObj = {...prev, [name]: ''};
            switch(name) {
                case 'newPassword':
                    if(!value) {
                        stateObj[name] = 'Please enter new password';
                    } else if(!passwordRegex.test(value)) {
                        stateObj[name] = 'Incorrect password format.';
                    } else if(input.confirmPassword && value !== input.confirmPassword) {
                        stateObj['confirmPassword'] = 'Password settings are different.'
                    } else {
                        stateObj['confirmPassword'] = input.confirmPassword ? '' : error.confirmPassword;
                    }
                    break;
                case 'confirmPassword': 
                    if(!value) {
                        stateObj[name] = 'Please enter confirm password';
                    } else if(input.newPassword && value !== input.newPassword) {
                        stateObj[name] = 'Password settings are different.';
                    }
                    break;
                default: 
                    break;
            }
            return stateObj;
        })
    }
    const onReset = () => {
        setIsResetDone(true);
        setResetStatus('success');
    }
    
    return(
        <>
            {!isResetDone && 
            <>
                <div className="login__content--title p-t-10 p-b-30">Reset Password</div>
                <div className="login__reset">
                    <div className="login__content--password m-b-30">
                        <input type={showNewPassword ? "text": "password"} name="newPassword" className="login__content--input" value={input.newPassword} placeholder="Enter new password" onChange={onInputChange} onBlur={validateInput}/>           
                        <span className={`login__content--input-icon ${showNewPassword ? 'login__content--input-eyeicon': ''}`} onClick={()=> setShowNewPassword(!showNewPassword)}></span>
                        {error.newPassword && <div className="login__content--error p-t-3">{error.newPassword}</div>}
                    </div>
                    <div className="login__content--password m-b-30">
                        <input type={showConfirmPassword ? "text": "password"} name="confirmPassword" className="login__content--input" value={input.confirmPassword} placeholder="Confirm password" onChange={onInputChange} onBlur={validateInput} />
                        <span className={`login__content--input-icon ${showConfirmPassword ? 'login__content--input-eyeicon': ''}`} onClick={()=> setShowConfirmPassword(!showConfirmPassword)}></span>
                        {error.confirmPassword && <div className="login__content--error p-t-3">{error.confirmPassword}</div>}
                    </div>
                    <div className="login__content--message">*Please ensure your password contains at least 8 characters with numbers.</div>
                    <div className="login__content--buttons">
                        <button className="btn btn--transparent login__content--button m-r-20" onClick={() => props.setIsForgotPassword(false)}>Clear</button>
                        <button className={`btn login__content--button ${input.newPassword && input.confirmPassword && !error.newPassword && !error.confirmPassword ? 'active': ''}`} onClick={onReset}>Save</button>
                    </div>
                </div>
            </>
            }
            {isResetDone && 
                <>
                { 
                    resetStatus === 'success' ? <ResetSuccess setIsForgotPassword={props.setIsForgotPassword} setIsResetPassword={props.setIsResetPassword}/> : <ResetFailure setIsForgotPassword={props.setIsForgotPassword} setIsResetPassword={props.setIsResetPassword} />
                }
                </>
            }
        </>
    )
}

export default Reset;

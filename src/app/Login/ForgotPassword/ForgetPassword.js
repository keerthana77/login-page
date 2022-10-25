import { useState } from "react";
import { useTranslation } from "react-i18next";
import ForgetSuccessLink from '../ForgotPassword/ForgetSuccessLink';
import trlKeys from '../../../util/Constants/translation-keys';

const ForgetPassword = (props) => {
    const [username, setUsername] = useState('');
    //eslint-disable-next-line
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isResetLinkSent, setIsResetLinkSent] = useState(false);
    const { t } = useTranslation();
    return(
        <> 
            {!isResetLinkSent && 
                <>
                    <div className="login__content--title p-t-10 p-b-15">{t(trlKeys.recover)}</div>
                    <div className="login__content--email">
                        <input type="email" className="login__content--input" placeholder={t(trlKeys.forget_input_placeholder)} onChange={(event)=> {setIsEmailValid(emailRegex.test(event.target.value)); setUsername(event.target.value)}} />
                        {!isEmailValid && username && <div className="login__content--error p-t-3">{t(trlKeys.wrong_email_msg)}</div>}
                    </div>
                    <div className="login__content--buttons">
                        <button className="btn btn--transparent login__content--button m-r-20" onClick={() => props.setIsForgotPassword(false)}>{t(trlKeys.back)}</button>
                        <button className={`btn login__content--button ${isEmailValid ? 'active': ''}`} onClick={() => setIsResetLinkSent(true)}>{t(trlKeys.send)}</button>
                    </div>
                </>
            }
            {isResetLinkSent && <ForgetSuccessLink setIsForgotPassword={props.setIsForgotPassword} />}
        </>
    )
}

export default ForgetPassword;
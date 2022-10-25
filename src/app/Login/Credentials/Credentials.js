import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import trlKeys from '../../../util/Constants/translation-keys';

const Credentials = (props) => {
    let navigate = useNavigate();
    const credentials = { username: 'keerthana.kalidass@liteon.com', password: 'Password' };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isWrongCredential, setIsWrongCredential] = useState(false);
    const [msg, setMsg] = useState('');
    const { t } = useTranslation();
    const onViewPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };
    const onLogin = () => {
        if (credentials.username === username && credentials.password === password) {
            navigate('model-management')
        } else if (!username || !password) {
            setIsWrongCredential(true);
            setMsg('Please enter the user and password.');
        } else {
            setIsWrongCredential(true);
            setMsg('Your email and password do not match.');
        }
    }
    return (
        <>
            <div className="login__content--email">
                <input type="email" className="login__content--input" value={username} placeholder={t(trlKeys.email)} onChange={(e) => { setUsername(e.target.value); setIsWrongCredential(false); }} />
            </div>
            <div className="login__content--password">
                <input type={showPassword ? "text": "password"} value={password} className="login__content--input" placeholder={t(trlKeys.password)} onChange={(e) => { setPassword(e.target.value); setIsWrongCredential(false); }} />
                <span className={`login__content--input-icon ${showPassword ? 'login__content--input-eyeicon': ''}`} onClick={onViewPassword}></span>
            </div>
            {isWrongCredential && (username || password) && <div className="login__content--error p-t-3">{msg}</div>}
            <div className="login__content--trouble" onClick={() => props.setIsForgotPassword(true)}>{t(trlKeys.trouble_login)}</div>
            <button className={`btn login__content--button ${username && password ? 'active' : ''}`} disabled={!username || !password} onClick={onLogin}>{t(trlKeys.login)}</button>
        </>
    )
}

export default Credentials;
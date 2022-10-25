import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import trlKeys from '../../util/Constants/translation-keys';
import Credentials from './Credentials/Credentials';
import ForgetPassword from './ForgotPassword/ForgetPassword';
import Reset from './Reset/Reset';

import BackgroundImg from '../../assets/login_bg.png';
import BackgroundVideo from '../../assets/background_video.mp4';
import '../Login/Login.scss';

const Login = () => {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem('lng'));

    const languages = [
        { name: "English", code: "en" },
        { name: "日本語", code: "ja" },
    ];
    const onlanguagechange = (e) => {
        i18n.changeLanguage(e.target.value)
        localStorage.setItem('lng', e.target.value)
        setLanguage(e.target.value);
    };
    return (
        <div className="container">
            <section className="login">
                <video className="login__background" autoPlay loop muted poster={BackgroundImg}>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
                <div className="switcher">
                    <span>Languages</span>
                    <select onChange={onlanguagechange} value={language}>
                        {languages.map(({name, code}) => {
                            return(
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <section className="login__content">
                    <div className="login__content--logo"></div>
                    {!isForgotPassword && !isResetPassword && 
                        <Credentials setIsForgotPassword={setIsForgotPassword} />
                    }
                    {isForgotPassword &&
                        <ForgetPassword setIsForgotPassword={setIsForgotPassword} />
                    }
                    {!isForgotPassword && isResetPassword &&
                        <Reset setIsResetPassword={setIsResetPassword} setIsForgotPassword={setIsForgotPassword}  />
                    }
                </section>
                <section className="login__footer p-b-20">
                    {t(trlKeys.copyright)}
                </section>
            </section>
        </div>
    )
};

export default Login;
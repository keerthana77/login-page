const ResetSuccess = (props) => {
    setTimeout(() => {
        props.setIsForgotPassword(false);
        props.setIsResetPassword(false);
    }, 2000)
    return (
        <>
            <div className="login__success">
                <div className="login__success--boldtext">Your password was reset successfully!</div>
                <div className="login__success--smalltext">Returning to login in 2s...</div>
                <button className="btn active login__success--button" onClick={() => {props.setIsForgotPassword(false); props.setIsResetPassword(false);}}>OK</button>
            </div>
        </>
    )
}

export default ResetSuccess;
const ResetFailure = (props) => {
    setTimeout(() => {
        props.setIsForgotPassword(false);
        props.setIsResetPassword(false);
    }, 2000)
    return (
        <>
            <div className="login__success">
                <div className="login__success--boldtext">Password Reset Failed.</div>
                <div className="login__success--normal">Would you like to seek  <span className="login__success--link">ouadmin@organization.com.</span> for assistance?</div>
                <div className="login__success--smalltext">Returning to login in 2s...</div>
                <button className="btn active login__success--button" onClick={() => props.setIsForgotPassword(false)}>Try Again</button>
            </div>
        </>
    )
}

export default ResetFailure;
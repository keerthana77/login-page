const ForgetSuccessLink = (props) => {
    setTimeout(() => {
        props.setIsForgotPassword(false);
    }, 2000)
    return (
        <>
            <div className="login__success">
                <div className="login__success--boldtext">Password reset link sent successfully!</div>
                <div className="login__success--normal">A password reset link has been sent to <span className="login__success--link">ouadmin@organization.com.</span>  Please go to confirm.</div>
                <div className="login__success--smalltext">Returning to login in 2s...</div>
                <button className="btn active login__success--button" onClick={() => props.setIsForgotPassword(false)}>OK</button>
            </div>
        </>
    )
}

export default ForgetSuccessLink;

import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import './SignModal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1440,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
    display: "flex",
    gap: "18px"
};



const SignModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setSignType(1);
        setOpen(false);
    }

    const [showPwd, setShowPwd] = React.useState(false)
    const handlePwd = () => {
        setShowPwd((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [signType, setSignType] = React.useState(1)
    const handleSignType = () => {
        setSignType((prevState) => {
            return (
                prevState === 1 ? 2 : 1
            )
        })
    }

    return (
        <div>
            <button className='header-sign-btn d-b' onClick={handleOpen}>Sign up</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ width: "calc(1440px - 663px) ", paddingTop: "32px", 
                        paddingBottom: "48px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <div style={{ marginLeft: "48px" }}><img src="/images/sign-logo.svg" alt="sign-logo" /></div>
                        <h2 className="sign-modal-title">
                            {
                                signType === 1 ? "Sign Up To eatly"
                                    : signType === 2 ? "Sign In to eatly"
                                        : "Forget Password"
                            }
                            {
                                signType === 3 ?
                                    <p className="sign-modal-desc">
                                        Enter Your Mail To Reset
                                    </p>
                                    : null
                            }
                        </h2>
                        {
                            signType != 3 ?
                                <>
                                    <div className="sign-modal-social d-f">
                                        <a href="" className="social-link"><img src="/images/google.png" alt="Google" /></a>
                                        <a href="" className="social-link"><img src="/images/apple.png" alt="Apple" /></a>
                                    </div>
                                    <p className="sign-modal-or">Or</p>
                                </>
                                : null
                        }
                        <form action='' className="sign-modal-fm">
                            <div className="input-box d-f">
                                {signType === 1 ? <input type="text" name='signName' placeholder='Tom Hillson' /> : null}
                                <input type="email" name="signEmail" placeholder='TomHill@Mail.com' />
                                {
                                    signType === 1 || signType === 2 ?
                                        <div className="pwd-wr d-f jc-sb align-center">
                                            <div><img src="/images/pwd.png" alt="pwd" /></div>
                                            <input
                                                type={showPwd ? "text" : "password"}
                                                name='signPwd' className='input-pwd'
                                                placeholder='***************************'
                                            />
                                            <button type='button' onClick={handlePwd}><img src="/images/ice.png" alt="ice" /></button>
                                        </div>
                                        : null
                                }

                            </div>
                            {
                                signType === 2 ? <button className="sign-forget" onClick={() => setSignType(3)}>Forget Password ?</button>
                                    : null
                            }
                            <button type="button">{signType === 1 ? "Sign Up" : signType === 2 ? "Log In" : "Verify"}</button>
                        </form>
                        {
                            signType != 3 ?
                                <div className="sign-modal-bottom d-f align-center">
                                    <p className="sign-modal-note">{signType === 1 ? "Already Have An Account?" : "Create A New Account?"} </p>
                                    <button
                                        type='button'
                                        className='sign-modal-action'
                                        onClick={handleSignType}
                                    >
                                        {signType === 1 ? "Log In" : signType == 2 ? "Sign Up" : "Verify"}
                                    </button>
                                </div>
                                : null
                        }
                        <div className="sign-copyright d-f jc-sb">
                            <a href="" className="d-b">Privacy Policy</a>
                            <a href="" className="d-b">Copyright 2022</a>
                        </div>
                    </div>
                    <div className="sign-side">
                        <div className='sign-pic'><img src="/images/sign-pic.png" alt="sign-pic" /></div>
                        <h2 className="sign-side-title">Find Foods With Love</h2>
                        <p className="sign-side-desc">
                            Eatly Is The Food Delivery Dashboard And Having More
                            Than 2K+ Dishes Including Asian, Chinese, Italians And Many More.
                            Our Dashboard Helps You To Manage Orders And Money.
                        </p>
                        <div className="sign-indicator d-f">
                            <div className="indicator-item__active"></div>
                            <div className="indicator-item"></div>
                            <div className="indicator-item"></div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default SignModal
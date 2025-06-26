
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
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='sign-btn d-b' onClick={handleOpen}>Sign up</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{width: "calc(1440px - 663px) ", paddingTop: "32px"}}>
                        <div style={{marginLeft: "48px"}}><img src="/images/sign-logo.svg" alt="sign-logo" /></div>
                        <h2 className="sign-modal-title">Sign Up To eatly</h2>
                        <div className="sign-modal-social d-f">
                            <a href="" className="social-link"><img src="/images/google.png" alt="Google" /></a>
                            <a href="" className="social-link"><img src="/images/apple.png" alt="Apple" /></a>
                        </div>
                        <p className="sign-modal-or">Or</p>
                        <form action='' className="sign-modal-fm">
                            <div className="input-box d-f">
                                <input type="text" name='signName' placeholder='Tom Hillson' />
                                <input type="email" name="signEmail" placeholder='TomHill@Mail.com' />
                                <div className="pwd-wr d-f jc-sb align-center">
                                    <div><img src="/images/pwd.png" alt="pwd" /></div>
                                    <input type="password" name='signPwd' className='input-pwd' placeholder='***************************' />
                                    <button><img src="/images/ice.png" alt="ice" /></button>
                                </div>
                            </div>
                            <button type="button">Sign up</button>
                        </form>
                        <div className="sign-modal-bottom d-f align-center">
                            <p className="sign-modal-note">Already Have An Account?</p>
                            <button className='sign-modal-action'>Log In</button>
                        </div>
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
import './css/Contact.css'

const Contact = () => {
    return (
        <main className='contact-main d-f'>
            <div><img src="/images/contact-main.png" alt="contact-main" /></div>
            <div>
                <h1 className="page-bl-title">Customer <span> Support</span></h1>
                <form action="" className='contact-fm'>
                    <div className="input-box d-f">
                        <input type="text" name='contactName' placeholder='Full name' />
                        <input type="email" name='contactEmail' placeholder='enter your email' />
                    </div>
                    <textarea name="contactMasg" placeholder='Enter The Problem Or Query '></textarea>
                    <button type='button'>Send Now</button>
                </form>
            </div>
        </main>
    )
}

export default Contact
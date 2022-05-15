import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname : '',
        phone : '',
        email: '',
        area : ''
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name] : value,
            }
        });
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert('Data submitted');
        // setData('');
    }
    return (
        <>
            <div className='my-5'>

                <h1 className='text-center'>Contact page</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-5 col-10 mx-auto'>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input name='fullname' value={data.fullname} onChange={inputEvent} type="name" class="form-control"  required/>
                               
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input name='phone' value={data.phone} onChange={inputEvent} type="phone" class="form-control"  required/>
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input name='email' value={data.email} onChange={inputEvent} type="email" class="form-control" required  />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="texarea" class="form-label">Message</label>
                                <textarea name='area' value={data.area} onChange={inputEvent} class="form-control" required></textarea>
                                
                            </div>
                            
                            <button type="submit" class="btn btn-primary" onClick={formSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
    });

    const InputEvent = (event) => {
        const {name, value}=event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`My name is ${data.name}. My phone no. is ${data.phone} and my email address is ${data.email}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Name</label>
                                <input type="text"
                                 className="form-control"
                                  id="exampleInputName"
                                  name='name'
                                  value={data.name}
                                  onChange={InputEvent}
                                   required/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                 className="form-control"
                                  id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   name='email'
                                   value={data.email}
                                   onChange={InputEvent}
                                    required/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPhone" className="form-label">Phone No</label>
                                <input type="number"
                                 className="form-control"
                                  id="exampleInputPhone"
                                  name='phone'
                                  value={data.phone}
                                  onChange={InputEvent}
                                   required/>
                            </div>

                            <div className="mb-3">
                                <label className="pr-3">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                        value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                        value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleDataList" className="form-label">Select City</label>
                                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." required/>
                                <datalist id="datalistOptions">
                                    <option value="San Francisco"></option>
                                    <option value="New York"></option>
                                    <option value="Seattle"></option>
                                    <option value="Los Angeles"></option>
                                    <option value="Chicago"></option>
                                </datalist>
                            </div>

                            <div className="mb-3">
                                <div className="form-file">
                                    <input type="file" className="form-file-input" id="customFile" required/>
                                    <label className="form-file-label" for="customFile">
                                        <span className="form-file-text">Choose file...</span>
                                        <span className="form-file-button">Browse</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-outline-primary mb-5">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
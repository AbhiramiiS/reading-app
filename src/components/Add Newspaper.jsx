import React from 'react'

const AddNewspaper = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Subscriber Name</label>
                            <input type="text" className="form-control" /></div>
                        <div className="row g-3 div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-control">Phone Number</label>
                            <input type="text" className="form-control" /></div>
                        <div className="row g-3 div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><label htmlFor="" className="form-label">Address</label>
                            <textarea name="" id="" className="form-control"></textarea></div>
                        <div className="row g-3 div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" /></div>
                        <div className="row g-3 div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">District</label><select name="" id="" className="form-control">
                            <option value="Trivandrum">Trivandrum</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Eranakulam">Eranakulam</option>
                            <option value="Trissur">Trissur</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kasargod">Kasargod</option>
                        </select></div>
                    <div className="row g-3 div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Village Office</label>
                    <input type="text" className="form-control" /></div>
                    <div className="row g-3 div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Email id</label>
                    <input type="text" className="form-control" /></div>
                    <div className="row g-3 div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">button <button className="btn-info"></button></div>
                </div>
            </div>
        </div>
      
    </div >
  )
}

export default AddNewspaper

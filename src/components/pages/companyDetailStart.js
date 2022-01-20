import React from 'react';

export default function companyDetailStart() {
  return (
    <div>
      <div class="container mt-5">
        <div class="table-title">
          <div class="row col-md-12">
            <div class="col-sm-6">
              <h2>
                Company <b>Details</b>
              </h2>
            </div>
          </div>
        </div>
        <form>
          <div class="form-row">
            <div class="col-md-8">
              <label htmlFor="inputName" class="form-label">
                Company Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="Comapny Name"
                required
              />
            </div>
            <div class="col-md-4">
              <label htmlFor="inputName" class="form-label">
                Branch
              </label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="Branch"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label htmlFor="validationDefault01">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="First name"
                value="Name"
                required
              />
            </div>
            <div class="col-md-4 mb-3">
              <label htmlFor="validationDefault02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                value="Last Name"
                required
              />
            </div>
            <div class="col-md-4 mb-3">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected>H/O</option>
                <option>Branch</option>
                <option>Finence</option>
                <option>Client</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-8">
              <label htmlFor="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-4">
              <label htmlFor="inputPassword4" class="form-label">
                No. Of Employee
              </label>
              <input type="number" class="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label htmlFor="validationDefault03">Address</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault03"
                placeholder="Address"
                required
              />
            </div>
            <div class="col-md-3 mb-3">
              <label htmlFor="exampleFormControlSelect1">State</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected>Uttar Pradesh</option>
                <option>Madhya Pradesh</option>
                <option>Bihar</option>
                <option>Maharastra</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label htmlFor="validationDefault05">Zip</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault05"
                placeholder="Zip"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button
            class="btn btn-success"
            onclick="window.location.href='dashboard.html'"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

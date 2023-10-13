import "./register.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function RegistrationForm() {
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow className="shadow p-3 mb-5 bg-white rounded">

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">

            <div className="text-center">
              <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Create an Account</h4>
            </div>

            <p>Please fill out the registration form</p>

            <MDBInput wrapperClass='mb-4' label='Full Name' id='fullName' type='text' />
            <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' />
            <MDBInput wrapperClass='mb-4' label='Confirm Password' id='confirmPassword' type='password' />

            <div className="text-center pt-1 mb-5 pb-1">
              <button className=" btn text-white mb-4 w-100 gradient-custom-2">Register</button>
              <a className="text-muted" href="#!">Already have an account? Login here</a>
            </div>
          </div>
        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Join our community</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegistrationForm;

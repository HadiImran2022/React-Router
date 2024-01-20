import React from 'react'

const Login = () => {
  return (
    <div className="container-fluid mt-5">
    <div className="container row justify-content-center">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header fw-bold bg-primary text-center text-white">Login</div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login

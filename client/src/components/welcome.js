import React, { Component } from 'react';


export default class Welcome extends Component {
  render() {
    return (
      <div id="carousel-onboarding" className="carousel slide" data-ride="carousel" data-interval="false">

        <ol className="carousel-indicators">
          <li data-target="#carousel-onboarding" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-onboarding" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile" />
                <p className="help-block">Example block-level help text here.</p>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
          <div className="item">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile" />
                <p className="help-block">Example block-level help text here.</p>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-onboarding" role="button" data-slide="prev">

          <span>Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-onboarding" role="button" data-slide="next">

          <span>Next</span>
        </a>
      </div>
    )
  }
};

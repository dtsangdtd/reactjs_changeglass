import React, { Component } from 'react';

export default class ChangeGlass extends Component {
  state = {
    glassImg: `./img/glassesImage/v1.png`,
    glassContext: 'GUCCI G8850U',
    dolar: `$30`,
  };
  handleChangeGlass = (glassImg, glassContext, dolar) => {
    this.setState({ glassImg });
    this.setState({ glassContext });
    this.setState({ dolar });
  };
  render() {
    return (
      <div>
        <section className='glasses-app bg-dark' style={{ height: '100vh' }}>
          <h2 className='text-center h2 text-white py-1'>Glasses App</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='container row'>
              <section className='model d-flex justify-content-center col-5'>
                <div
                  className='card text-left'
                  style={{ width: 300, position: 'relative' }}
                >
                  <img
                    className='card-img-top'
                    src='./img/glassesImage/model.jpg'
                    alt='hinh model'
                  />
                  <img
                    src={this.state.glassImg}
                    alt='kinh'
                    style={{
                      width: 170,
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '16%',
                    }}
                  />
                  <div className='card-body'>
                    <span className='card-title badge-danger h3 px-2 rounded'>
                      {this.state.dolar}
                    </span>
                    <p className='card-text mt-2'>{this.state.glassContext}</p>
                  </div>
                </div>
              </section>
              <section className='glasses__list mt-4 d-flex justify-content-around flex-wrap col-7'>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v1.png',
                        'GUCCI G8850U',
                        '$30'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v1.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v2.png',
                        'GUCCI G8759H',
                        '$50'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v2.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v3.png',
                        'DIOR D6700HQ',
                        '$30'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v3.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v4.png',
                        'DIOR D6005U',
                        '$30'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v4.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v5.png',
                        'PRADA P8750',
                        '$100'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v5.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v6.png',
                        'PRADA P9700',
                        '$500'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v6.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v7.png',
                        'FENDI F8750',
                        '$10000'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v7.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v8.png',
                        'FENDI F8500',
                        '$8000'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v8.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      this.handleChangeGlass(
                        './img/glassesImage/v9.png',
                        'FENDI F4300                        ',
                        '$9999'
                      );
                    }}
                  >
                    <img
                      src='./img/glassesImage/v9.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

import React  from 'react'
const Alert = (props) => {
    let {alert} = props;
    return (
    <>
      {alert ? (
        <div
          className={
            "hello-alert px-6 py-4 border-0 rounded relative mb-4 bg-blue-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{alert.type}!</b> {alert.message}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};


export default Alert;

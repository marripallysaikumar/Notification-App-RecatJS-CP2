const Notification = (props) => {
  const { image, text, className } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon" src={image} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  <div className="notifications-app-container">
    <h1>Notifications</h1>
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="information message"
      className="blue"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="success message"
      className="green"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="warning message"
      className="yellow"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="error message"
      className="red"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

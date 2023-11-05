import logo from "./logo.ico";
import './ErrorMessage.css';

const ErrorMessage = () => {
    return (
        <div className="Error">
      <header className="Error-header">
        <img src={logo} className="Error-logo" alt="logo" />
        <p>
          <code>
            Hey!<br></br>You are trying to access the Marvel Portal, but
            suspicious activity has been detected on your end.<br></br>If you
            haven't done anything, just go to the{" "}
            <a href="https://www.marvel.com/" class="errorMessage">main Marvel page</a>👈<sup>Click here</sup>
          </code>
        </p>
      </header>
    </div>
    )
}

export default ErrorMessage;
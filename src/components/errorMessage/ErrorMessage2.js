import img from './error.gif';
import './ErrorMessage.css';

const ErrorMessage = () => {
    return (
        <img alt='Error' style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', 
        margin: '0 auto'}}  src={img}/>
    )
}

export default ErrorMessage;
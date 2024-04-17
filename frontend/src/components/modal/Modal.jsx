import './Modal.css';

const Modal = ({ children }) => {
  return (
    <div id='modalMain'>
      <div id='modalBackground'></div>
      <div id='modalContent'>{children}</div>
    </div>
  );
};

export default Modal;
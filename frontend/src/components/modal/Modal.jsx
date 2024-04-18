import './Modal.css';

const Modal = ({ children, isEditing }) => {
  const modalMain = isEditing ? 'modalMainEdit' : 'modalMain';
  const modalBackground = isEditing ? 'modalEditBackground' : 'modalBackground';
  const modalContent = isEditing ? 'modalEditContent' : 'modalContent';
  return (
    <div id={modalMain}>
      <div id={modalBackground}></div>
      <div id={modalContent}>{children}</div>
    </div>
  );
};

export default Modal;

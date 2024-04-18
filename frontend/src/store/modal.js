const SHOW_MODAL = "modal/showModal";
const HIDE_MODAL = "modal/hideModal";

export const showModal = (modalType, modalData = {}) => ({
  type: SHOW_MODAL,
  modalType,
  modalData,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});



function modalsReducer(state = { type: null, modalData: {} }, action) {
  switch (action.type) {
  case SHOW_MODAL: {
    return { 
      type: action.modalType,
      modalData: action.modalData,
    
    };
  }
  case HIDE_MODAL:
    return { type: null, modalData: {} };
  default:
    return state;
  }
}

export default modalsReducer;

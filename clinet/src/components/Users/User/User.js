import React from 'react';
import Modal from '../../UI/Modal/Modal';

const User = ({ onCloseUserStatus }) => {
  return (
    <Modal onClose={onCloseUserStatus}>
      {/* {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseUserStatus}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div> */}
    </Modal>
  );
};

export default User;

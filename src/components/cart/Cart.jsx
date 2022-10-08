import Modal from "../modal/Modal";
import './_CartStyle.scss';

export default function Cart({ children, modal }) {
  return (
    <div className="modal">
      <Modal modal={modal} />
      {children}
    </div>
  );
}

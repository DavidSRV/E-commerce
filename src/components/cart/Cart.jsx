import Modal from "../modal/Modal";

export default function Cart({ children, modal }) {
  return (
    <div>
      <Modal modal={modal} />
      {children}
    </div>
  );
}

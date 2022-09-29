import Modal from "../modal/Modal";

export default function Cart({children, modal}){

    return(
        <div>{children}
        <Modal modal={modal}/> 
        </div>
    );
}
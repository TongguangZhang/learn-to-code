import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
    return (
        <div className="alert alert-warning alert-dismissible">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                onClick={onClick}
            ></button>
        </div>
    );
};

export default Alert;

import React from "react";
import { Modal, ModalProps } from "react-bootstrap";

export interface Props extends ModalProps {
  heading?: string;
  subHeading?: string;
  children: React.ReactElement;
  showHeader?: boolean;
  error?: string | null;
  showCloseButton?: boolean
}

const CustomModal: React.FC<Props> = ({
  heading,
  subHeading,
  children,
  show,
  onHide,
  showHeader = true,
  error = null,
  showCloseButton=true,
  ...props
}) => {
  return (
    <Modal {...props} show={show} onHide={onHide} centered backdrop="static">
      <div className="modal-content" id="smb">
        {showHeader && (
          <div>
            <div className="modal-header border-0">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <div>
                  <h6 className="fw-bold mb-1">{heading}</h6>
                  <h6 className="text-muted fs-7 fw-normal mb-0">
                    {subHeading}
                  </h6>
                </div>
                {showCloseButton && <div>
                  <button
                    onClick={onHide}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  />
                </div>}
              </div>
            </div>
            {error && (
              <div className="px-4">
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                  style={{
                    transition: "opacity 100ms ease-in-out",
                    minWidth: 300
                  }}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <i
                      className="fa fw-bold fs-5 fa-times-circle" aria-hidden="true"
                    />
                    <span className="fw-bold">Error. {error}</span>
                  </div>
                  <span
                    // type="button"
                    className="btn-close pointer"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    style={{
                      fontSize: ".6em"
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;

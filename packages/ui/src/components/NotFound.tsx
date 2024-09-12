"use client";
import { useRouter } from "next/navigation";

export const NotFound = () => {
  const { back } = useRouter();

  return (
    <div className="wrap">
      <div id="smb">
        <div id="internal-backoffice">
          <div className="container h-100">
            <div className="mt-4 mx-lg-3 h-100">
              {/* Staff Empty state */}
              <div className="card vh-height-50 bg-white border-0">
                <div className="card-body p-3 p-lg-4 h-100">
                  <div className="d-flex h-100 text-center flex-column align-items-center justify-content-center">
                    <div className="mb-4">
                      <img
                        width={378}
                        height={216}
                        className="img-fluid"
                        src="https://designs.hubtel.com/v4/smb///assets/images/404-rocket.png"
                        alt="404 page"
                      />
                    </div>
                    <div className="text-center">
                      <h6 className="text-black-50 fw-semibold mb-0">
                        Page not found
                      </h6>
                      <h6 className="text-muted fw-normal fs-7 mb-0 mt-1">
                        The page you are requesting for is not available
                      </h6>
                    </div>
                    <div className="mt-2">
                      <button
                        onClick={() => back()}
                        className="btn btn-primary px-5 d-flex align-items-center"
                      >
                        <span>Go Back</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./ProductSell.css";

function ProductSell() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="table-container">
          <table className="table custom-table">
            <thead>
              <tr>
                <th style={{ width: "55%" }}>Product name</th>
                <th style={{ width: "15%" }}>Stock</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "15%" }}>Total sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="col-4 col-md-3">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8 col-md-9">
                      <h5>Abstract 3D</h5>
                      <span className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                  </div>
                </td>
                <td>10</td>
                <td>$20.00</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="col-4 col-md-3">
                      <img
                        src="https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8 col-md-9">
                      <h5>Sarphens Illustration</h5>
                      <span className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                  </div>
                </td>
                <td>5</td>
                <td>$25.00</td>
                <td>$125.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default ProductSell;

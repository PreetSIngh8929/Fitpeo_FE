import React from "react";
import "./ProductSell.css";
function ProductSell() {
  return (
    <div style={{ padding: "50px" }}>
      <div className="row" style={{ width: "100%" }}>
        <div className="table-container">
          <table className="custom-table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ width: "55%" }}>Product name</th>
                <th style={{ width: "15%" }}>Stock</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "15%" }}>Total sales</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over your data to generate table rows */}
              <tr>
                <td>
                  <div className="row">
                    <div className="col" style={{width:'20%'}}>
                        <img style={{width:'100%'}}  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt=""/>
                    </div>
                    <div className="col" style={{minWidth:'80%'}}>
                      <h5>Abstract 3D</h5>
                      <span style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                  </div>
                </td>
                <td>10</td>
                <td>$20.00</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>
                <div className="row">
                    <div className="col" style={{width:'20%'}}>
                        <img style={{width:'100%'}} src="https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg" alt=""/>
                    </div>
                    <div className="col" style={{minWidth:'80%'}}>
                      <h5>Sarphens Illustration</h5>
                      <span style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                  </div>
                </td>
                <td>5</td>
                <td>$25.00</td>
                <td>$125.00</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default ProductSell;

import "./App.css";
// import Gaugecharts from "./gaugecharts.js";
import Sidebar from "./Sidebar";
import MultiSeries from "./multiserieschart";
import Donut from "./stackeddualaxis";

function App() {
  return (
    <div className="App" style={{ backgroundColor: " #ECF3F9" }}>
      <div className="row">
        <div
          className="col"
          style={{ maxWidth: "15%", height: "950px", backgroundColor: "#002244",padding:'40px' }}
        >
          <Sidebar />
        </div>
        <div className="col" style={{ width: "85%", padding: "50px" }}>
          <div
            style={{
              width: "100%",
              height: "20px",
              marginBottom: "5px",
              display: "flex",
              float: "left",
            }}
          >
            <span
              style={{
                marginLeft: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></span>
            <span
              style={{
                marginLeft: "50px",
                marginTop: "20px",
                fontSize: "25px",
                color: "navy",
              }}
            >
              Hello Preet
            </span>
          </div>

          <div
            className="row"
            style={{
              maxHeight: "280px",
              width: "100%",
              backgroundColor: "ECF3F9",
              margin: "5px",
            }}
          >
            <div className="col" style={{ width: "100%", height: "300px" }}>
              <div className="row">
                <span
                  className="col"
                  style={{
                    height: "150px",
                    paddingTop: "15px",
                    width: "25%",
                    backgroundColor: "white",
                    margin: "50px 0px 50px 50px",
                    borderRadius: "16px",
                  }}
                >
                  <div className="row">
                    <div
                      className="col"
                      style={{
                        backgroundColor: "lightgreen",
                        height: "100px",
                        maxWidth: "100px",
                        borderRadius: "999px",
                        margin: "13px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "50px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="green"
                        class="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                    </div>
                    <div className="col">
                      <div className="row">
                        <h5
                          style={{
                            color: "grey",
                            fontSize: "16px",
                            marginTop: "15px",
                          }}
                        >
                          Earning
                        </h5>
                      </div>
                      <div className="row">
                        <h3 style={{ fontSize: "24px" }}>$198k</h3>
                      </div>
                      <div className="row">
                        <h5 style={{ color: "green", fontSize: "18px" }}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-up"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                            />
                          </svg>
                          37.8%{" "}
                          <span style={{ color: "grey" }}>this month</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </span>
                <span
                  className="col"
                  style={{
                    height: "150px",
                    paddingTop: "15px",
                    width: "25%",
                    backgroundColor: "white",
                    margin: "50px 0px 50px 50px",
                    borderRadius: "16px",
                  }}
                >
                  <div className="row">
                    <div
                      className="col"
                      style={{
                        backgroundColor: "RGB(177,156,217)",
                        height: "100px",
                        maxWidth: "100px",
                        borderRadius: "999px",
                        margin: "13px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "50px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="purple"
                        class="bi bi-journal-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                      </svg>
                    </div>
                    <div className="col">
                      <div className="row">
                        <h5
                          style={{
                            color: "grey",
                            fontSize: "16px",
                            marginTop: "15px",
                          }}
                        >
                          Orders
                        </h5>
                      </div>
                      <div className="row">
                        <h3 style={{ fontSize: "24px" }}>$2.4k</h3>
                      </div>
                      <div className="row">
                        <h5 style={{ color: "red", fontSize: "18px" }}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="red"
                            class="bi bi-arrow-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                          2% <span style={{ color: "grey" }}>this month</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </span>
                <span
                  className="col"
                  style={{
                    height: "150px",
                    paddingTop: "15px",
                    width: "25%",
                    backgroundColor: "white",
                    margin: "50px 0px 50px 50px",
                    borderRadius: "16px",
                  }}
                >
                  <div className="row">
                    <div
                      className="col"
                      style={{
                        backgroundColor: "#89CFF0",
                        height: "100px",
                        maxWidth: "100px",
                        borderRadius: "999px",
                        margin: "13px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "50px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="blue"
                        class="bi bi-wallet"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                      </svg>
                    </div>
                    <div className="col">
                      <div className="row">
                        <h5
                          style={{
                            color: "grey",
                            fontSize: "16px",
                            marginTop: "15px",
                          }}
                        >
                          Balance
                        </h5>
                      </div>
                      <div className="row">
                        <h3 style={{ fontSize: "24px" }}>$2.4k</h3>
                      </div>
                      <div className="row">
                        <h5 style={{ color: "red", fontSize: "18px" }}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="red"
                            class="bi bi-arrow-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                          2% <span style={{ color: "grey" }}>this month</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </span>
                <span
                  className="col"
                  style={{
                    height: "150px",
                    paddingTop: "15px",
                    width: "25%",
                    backgroundColor: "white",
                    margin: "50px 0px 50px 50px",
                    borderRadius: "16px",
                  }}
                >
                  <div className="row">
                    <div
                      className="col"
                      style={{
                        backgroundColor: "#fe7f9c",
                        height: "100px",
                        maxWidth: "100px",
                        borderRadius: "999px",
                        margin: "13px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "50px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="red"
                        class="bi bi-bag"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                    <div className="col">
                      <div className="row">
                        <h5
                          style={{
                            color: "grey",
                            fontSize: "16px",
                            marginTop: "15px",
                          }}
                        >
                          Total Sales
                        </h5>
                      </div>
                      <div className="row">
                        <h3 style={{ fontSize: "24px" }}>$89k</h3>
                      </div>
                      <div className="row">
                        <h5 style={{ color: "green", fontSize: "18px" }}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-up"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                            />
                          </svg>
                          11.8% <span style={{ color: "grey" }}>this week</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col" style={{
              width: "70%",
              height: "20px",
              marginBottom: "5px",
              display: "flex",
              float: "left",
              padding:'50px',
              borderRadius:'16px'
            }}>
        <MultiSeries  />
      </div>
      <div className="col" style={{
              width: "30%",
              padding:'50px',
              borderRadius:'16px'
            }}><Donut/></div>
      </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;

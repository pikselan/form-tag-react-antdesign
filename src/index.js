import React from "react";
import ReactDOM from "react-dom";
import { Select, Row, Col, Divider } from "antd";
import "./index.css";

function App() {
  let children = [
    "Maria Jiil",
    "Michael Douglas",
    "Limited partnerships",
    "Lilia Afleck",
    "Janet Rose",
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="App">
      <Divider />
      <Row>
        <Col span={2}>
          <div className="label">Owner :</div>
        </Col>
        <Col span={6}>
          <Select
            mode="multiple"
            style={{ minWidth: "30%" }}
            placeholder="Please select"
            defaultValue={["Maria Jiil", "Michael Douglas"]}
            onChange={handleChange}
          >
            {children.map((item, index) => {
              return (
                <Select.Option value={item} label={item} key={index}>
                  <div className="demo-option-label-item">{item}</div>
                </Select.Option>
              );
            })}
          </Select>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

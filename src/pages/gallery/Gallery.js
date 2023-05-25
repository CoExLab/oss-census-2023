import React, { useState } from "react";

import { Col, Row, Slider, Typography } from "antd";

import SiderLayout from "../../components/sider-layout/SiderLayout";
import LineGraph from "../../components/graphs/LineGraph";

import { data, data_bar } from "../../js/data";
import texts from "../../js/texts";

import "./Gallery.css";

export default function Gallery(props) {
  const [numCols, setNumCols]  = useState(3);
  const text = texts.gallery.content.siderLayout;
  return (
    <>
      <SiderLayout 
        title={text.title}
        description={text.description}
        sections={text.sections}
      />
      <div className="ecosystem-breakdown">
        <Row className="ecosystem-breakdown-header" justify="left">
          <Col offset={1} span={18}>
            <Typography.Title level={4}>Ecosystem Breakdown</Typography.Title>
          </Col>
          <Col className="column-slider" span={3}>
            Number of Columns
            <Slider
              min={2}
              max={4}
              value={numCols}
              onChange={setNumCols}
              marks={{2:2, 3:3, 4:4}}
              step={null}
            />
          </Col>
        </Row>
        <Row gutter={[32, 32]} justify="left">
          {data_bar["Contributor"]["male_female"]["x_categories"].slice(1).map(
            (ecosystem, index) => {
              const logo = require(`../../assets/ecosystems/${ecosystem}_logo_colored.png`);
              const color = data["Contributor"][`${ecosystem}_line`].data[0].color;
              return (<Col span={Math.floor(22/numCols)} offset={index%numCols==0 ? 1:0}>
                <Row align="middle" justify="start">
                  <Col offset={1}><img className={`gallery-ecosystem-logo ${ecosystem}-logo ecosystem-logo logo sm-logo`} src={logo} /></Col>
                  <Col offset={1}><Typography.Text style={{color}} strong>{ecosystem}</Typography.Text></Col>
                </Row>
                <LineGraph category={"Contributor"} ecosystem={ecosystem}/>
              </Col>);
            }
          )}
        </Row>
      </div>
    </>
  );
}
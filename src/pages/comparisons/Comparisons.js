import React, { useState } from "react";

import SiderLayout from "../../components/sider-layout/SiderLayout";

import texts from "../../js/texts";
import { data_bar } from "../../js/data";

import { Button, Col, Dropdown, Row, Space, Typography} from "antd";

import { DownOutlined } from "@ant-design/icons";

import "./Comparisons.css";

export default function Comparisons(props) {
  const text = texts.comparisons.content.siderLayout;

  const ecosystems = data_bar["Contributor"]["male_female"]["x_categories"];

  const [ecosystem1, setEcosystem1] = useState(null);
  const [ecosystem2, setEcosystem2] = useState(null);

  function EcosystemDropdown({ecosystemSelected, setEcosystemSelected}) {
    return (
    <Dropdown 
      className="ecosystem-dropdown"
      menu={{
        items: ecosystems.map((eco, index) => {
          return {
            label: eco,
            key: index,
          }
        }),
        onClick: e => setEcosystemSelected(ecosystems[e.key])
      }}
    >
      <Button>
        <Typography.Text type={ecosystemSelected ? "primary" : "secondary"}>
          <Space>
            {ecosystemSelected ?? "Select"}
            <DownOutlined />
          </Space>
        </Typography.Text>
      </Button>
    </Dropdown>
    );
  }

  let sections = [
    {
        title: "1. CHOOSE TWO ECOSYSTEMS",
        content: <Row align="middle">
          <Col span={8}>
            <Typography.Text strong>Ecosystem 1</Typography.Text>
            <EcosystemDropdown ecosystemSelected={ecosystem1} setEcosystemSelected={setEcosystem1}/>
          </Col>
          <Col span={8}>
            <Typography.Text strong>Ecosystem 2</Typography.Text>
            <EcosystemDropdown ecosystemSelected={ecosystem2} setEcosystemSelected={setEcosystem2}/>
          </Col>
          <Col span={8}>
            <Button type="primary" shape="round">Compare</Button>
          </Col>
        </Row>
    }];
  
  if (ecosystem1 && ecosystem2) {
    const logo1 = require(`../../assets/ecosystems/${ecosystem1}_logo_colored.png`);
    const logo2 = require(`../../assets/ecosystems/${ecosystem2}_logo_colored.png`);
    sections.push({
      title: "2. TOGGLE BETWEEN DIFFERENT YEARS",
      content: {
        comparison: {
          titleIcon: [logo1, logo2],
          title: [ecosystem1, ecosystem2],
          metrics: [
            {
              metric: "Year",
              value: ["year selector", "year selector"], // Placeholders
            },
            {
              metric: "Commits",
              value: ["bar graph", "bar graph"], // Placeholders
            },
            {
              metric: "Contributors",
              value: ["bar graph", "bar graph"], // Placeholders
            },
            {
              metric: "Commits From Women",
              value: ["bar graph", "bar graph"], // Placeholders
            },
            {
              metric: "Contributors who are Women",
              value: ["bar graph", "bar graph"], // Placeholders
            },
            {
              metric: "% of women among all contributors over the years",
              value: ["highcharts", "highcharts"], // Placeholders
            },
            {
              metric: "# of women among all contributors over the years",
              value: ["highcharts", "highcharts"], // Placeholders
            },
          ]
        },
      },
    })
  }

  return (
    <SiderLayout 
      title={text.title}
      description={text.description}
      sections={sections}
    />
  );
}
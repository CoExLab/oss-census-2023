import React, { useState } from "react";

import { Button, Col, Dropdown, Row, Space, Typography} from "antd";

import { DownOutlined } from "@ant-design/icons";

import SiderLayout from "../../components/sider-layout/SiderLayout";
import NeelyBarGraph from "../../components/graphs/NeelyBarGraph";

import texts from "../../js/texts";
import { data_bar } from "../../js/data";

import "./Comparisons.css";

function DropdownSelector({
  items,
  itemSelected, 
  setItemSelected,
}) {
  return (
  <Dropdown 
    className="ecosystem-dropdown"
    menu={{
      items: items.map((item, index) => {
        return {
          label: item,
          key: index,
        }
      }),
      onClick: e => setItemSelected(items[e.key])
    }}
  >
    <Button>
      <Typography.Text type={itemSelected ? "primary" : "secondary"}>
        <Space>
          {itemSelected ?? "Select"}
          <DownOutlined />
        </Space>
      </Typography.Text>
    </Button>
  </Dropdown>
  );
}

export default function Comparisons(props) {
  const text = texts.comparisons.content.siderLayout;

  const ecosystems = data_bar["Contributor"]["male_female"]["x_categories"];
  const years = [...Array(12).keys()].map(num => num + 2008);

  const [ecosystem1, setEcosystem1] = useState(null);
  const [ecosystem2, setEcosystem2] = useState(null);
  const [year1, setYear1] = useState(null);
  const [year2, setYear2] = useState(null);

  let sections = [
    {
        title: "1. CHOOSE TWO ECOSYSTEMS",
        content: <Row align="middle">
          <Col span={8}>
            <Typography.Text strong>Ecosystem 1</Typography.Text>
            <DropdownSelector items={ecosystems} itemSelected={ecosystem1} setItemSelected={setEcosystem1}/>
          </Col>
          <Col span={8} offset={4}>
            <Typography.Text strong>Ecosystem 2</Typography.Text>
            <DropdownSelector items={ecosystems} itemSelected={ecosystem2} setItemSelected={setEcosystem2}/>
          </Col>
        </Row>
    }];
  
  if (ecosystem1 && ecosystem2) {
    sections.push({
      title: "2. TOGGLE BETWEEN DIFFERENT YEARS",
      content: <Row align="middle">
        <Col span={8}>
          <Typography.Text strong>Year 1</Typography.Text>
          <DropdownSelector items={years} itemSelected={year1} setItemSelected={setYear1}/>
        </Col>
        <Col span={8} offset={4}>
          <Typography.Text strong>Year 2</Typography.Text>
          <DropdownSelector items={years} itemSelected={year2} setItemSelected={setYear2}/>
        </Col>
      </Row>
    })
  }

  if (ecosystem1 && ecosystem2 && year1 && year2) {
    sections.push({
      title: "3. COMPARE",
      content: {
        comparison: {
          title: [`${ecosystem1} in ${year1}`, `${ecosystem2} in ${year2}`],
          metrics: [
            {
              metric: "Commits",
              value: [
                "bar graph",
                "bar graph"
              ], // Placeholders
            },
            {
              metric: "Contributors",
              value: ["bar graph", "bar graph"], // Placeholders
            },
            {
              metric: "% of women among all contributors over the years",
              value: ["bar graph", "bar graph"], // Placeholders
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
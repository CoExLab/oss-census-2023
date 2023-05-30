import React, { useState } from "react";

import { Button, Col, Dropdown, Row, Space, Typography} from "antd";

import { DownOutlined } from "@ant-design/icons";

import SiderLayout from "../../components/sider-layout/SiderLayout";
import NeelyBarGraph from "../../components/graphs/NeelyBarGraph";
import LineGraph from "../../components/graphs/LineGraph";
import WomenBarGraph from "../../components/graphs/WomenBarGraph";

import texts from "../../js/texts";
import { data, data_bar } from "../../js/data";

import "./Comparisons.css";

function getStats(category, ecosystem, year) {
  const eco_data = data[category][ecosystem].data;
  const all_men = eco_data.find(e => e.name=="All Men").data;
  const all_women = eco_data.find(e => e.name=="All Women").data;
  const time_index = (year-2008)*4; // 2008 -> 0 -> 2008-3, 2019 -> 44 -> 2019-3
  
  // Note that the numbers are recorded in thousands
  const total = Math.round((all_men[time_index] + all_women[time_index]) * 1000);
  const percentage = (all_women[time_index] * 1000 / total) * 100;
  return [total, `${percentage.toFixed(2)}%`];
}

function DropdownSelector({
  useIcon,
  items,
  itemSelected, 
  setItemSelected,
}) {
  return (
  <Dropdown 
    className="dropdown-selector"
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
          {itemSelected && useIcon}
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
            <DropdownSelector 
              useIcon={ecosystem1 && ecosystem1 !== "All" && <img 
                className="ecosystem-dropdown-item-logo" 
                src={require(`../../assets/ecosystems/${ecosystem1}_logo_colored.png`)} 
              />} 
              items={ecosystems} 
              itemSelected={ecosystem1} 
              setItemSelected={setEcosystem1}
            />
          </Col>
          <Col span={8} offset={4}>
            <Typography.Text strong>Ecosystem 2</Typography.Text>
            <DropdownSelector 
              useIcon={ecosystem2 && ecosystem2 !== "All" && <img 
                className="ecosystem-dropdown-item-logo" 
                src={require(`../../assets/ecosystems/${ecosystem2}_logo_colored.png`)} 
              />} 
              items={ecosystems} 
              itemSelected={ecosystem2} 
              setItemSelected={setEcosystem2}
            />
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
    const [commit1_total, commit1_women_percentage] = getStats("Commit", ecosystem1, year1);
    const [commit2_total, commit2_women_percentage] = getStats("Commit", ecosystem2, year2);
    const max_commit = Math.max(commit1_total, commit2_total) * 1.3;
    const [contri1_total, contri1_women_percentage] = getStats("Contributor", ecosystem1, year1);
    const [contri2_total, contri2_women_percentage] = getStats("Contributor", ecosystem2, year2);
    const max_contri = Math.max(contri1_total, contri2_total) * 1.3;
    sections.push({
      title: "3. COMPARE",
      content: {
        comparison: {
          title: [`${ecosystem1} in ${year1}`, `${ecosystem2} in ${year2}`],
          metrics: [
            {
              metric: "Commits",
              value:[
                <Space direction="vertical">
                    <NeelyBarGraph max={max_commit} items={[{value: commit1_total}]}/> 
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">All Commits</Typography.Text> 
                    <NeelyBarGraph max="20%" items={[{value: commit1_women_percentage}]}/>
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">% Commits from Women</Typography.Text>
                </Space>,
                <Space direction="vertical">
                    <NeelyBarGraph max={max_commit} items={[{value: commit2_total}]}/> 
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">All Commits</Typography.Text> 
                    <NeelyBarGraph max="20%" items={[{value: commit2_women_percentage}]}/>
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">% Commits from Women</Typography.Text>
                </Space>,
              ]
            },
            {
              metric: "Contributors",
              value: [
                <Space direction="vertical">
                    <NeelyBarGraph max={max_contri} items={[{value: contri1_total}]}/> 
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">All Commits</Typography.Text> 
                    <NeelyBarGraph max="20%" items={[{value: contri1_women_percentage}]}/>
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">% Commits from Women</Typography.Text>
                </Space>,
                <Space direction="vertical">
                    <NeelyBarGraph max={max_contri} items={[{value: contri2_total}]}/> 
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">All Commits</Typography.Text> 
                    <NeelyBarGraph max="20%" items={[{value: contri2_women_percentage}]}/>
                    <Typography.Text className="comparison-value-highcharts-graph-xaxis">% Commits from Women</Typography.Text>
                </Space>,
              ]
            },
            {
              metric: "% of women among contributors over the years",
              value: [
                <LineGraph category="Contributor" ecosystem={ecosystem1} />,
                <LineGraph category="Contributor" ecosystem={ecosystem2} />,
              ],
            },
            {
              metric: "# of women contributors over the years",
              value: [
                <WomenBarGraph category="Contributor" ecosystem={ecosystem1} />,
                <WomenBarGraph category="Contributor" ecosystem={ecosystem2} />,
              ],
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
      expandAll={true}
    />
  );
}
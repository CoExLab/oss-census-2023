import React from "react";

import { Row, Col, Space, Typography, Divider } from "antd";

import "./ColumnComparison.css";

export default function ColumnComparison({
    titleIcon,
    title,
    metrics
}) {
    return (
    <>
        <Row className="comparison-title">
            <Col span={11}>
                <Space>
                    {titleIcon && <img src={titleIcon[0]} />}
                    <Typography.Text strong>{title[0]}</Typography.Text>
                </Space>
                <Divider style={{margin: "4px 0"}}/>
            </Col>
            <Col span={11} offset={2}>
                <Space>
                    {titleIcon && <img src={titleIcon[1]} />}
                    <Typography.Text strong>{title[1]}</Typography.Text>
                </Space>
                <Divider style={{margin: "4px 0"}}/>
            </Col>
        </Row>
        {
            metrics.map((metric, index) => 
            <>
            <Row className={`comparison-metric-${metric}`}>
                <Col span={11}>
                    <Typography.Text strong>
                        {metric.metric}
                    </Typography.Text>
                </Col>
            </Row>
            <Row className={`comparison-metric-${metric}-value`}>
            <Col span={11}>
                <Typography.Text>{metric.value[0]}</Typography.Text>
            </Col>
            <Col span={11} offset={2}>
                <Typography.Text>{metric.value[1]}</Typography.Text>
            </Col>
            </Row>
            </>
            )
        }
    </>
    )
}
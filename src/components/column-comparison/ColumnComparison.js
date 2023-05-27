import React from "react";

import { Row, Col, Typography, Divider } from "antd";

import "./ColumnComparison.css";

export default function ColumnComparison({
    title,
    metrics
}) {
    return (
    <>
        {
            metrics.map((metric, index) => 
            <>
            {index == 0 ? null : <Divider className="comparison-metric-divider" />}
            <Row className={`comparison-metric-title comparison-metric-${index}-title`}>
                <Col span={11}>
                    <Typography.Text strong>
                        {metric.metric}
                    </Typography.Text>
                </Col>
            </Row>
            {metric.description && <Row className={`comparison-metric-description comparison-metric-${index}-description`}>
                <Typography.Text>{metric.description}</Typography.Text>
            </Row>}
            <Row className={`comparison-metric-value comparison-metric-${index}-value`}>
                <Col span={11}>
                    <Typography.Text className="comparison-column-title">{title[0]}</Typography.Text>
                    <Typography.Text>{metric.value[0]}</Typography.Text>
                </Col>
                <Col span={11} offset={2}>
                    <Typography.Text className="comparison-column-title">{title[1]}</Typography.Text>
                    <Typography.Text>{metric.value[1]}</Typography.Text>
                </Col>
            </Row>
            </>
            )
        }
    </>
    )
}
import { Card } from "antd";

import "./Card.css";

export function EcosystemCard({ecosystem}) {
    const logo = require(`../../assets/ecosystems/${ecosystem}_logo_colored.png`);
    return (
        <Card className="ecosystem-card">
            <Card.Meta
                avatar={<img src={logo} />}
                title={ecosystem}
            />
        </Card>
    )
}
import { Typography } from "antd";

import "./NeelyBarGraph.css";

const colors = ["#2B2B2B", "#E9E9E9"];

export default function NeelyBarGraph({
    max,
    items,
}) {
    return (<div className="bar-graph">
        {items.map((item, index) => {
            const percentage = parseFloat(item.value)/parseFloat(max)*100;
            return (
            <div 
                className="bar-graph-col" 
                key={`bar-graph-col-${index}`}
                style={{
                    width: `${100/items.length}%`,
                }} 
            >
                <div 
                    className="bar-graph-bar-container" 
                    key={`bar-graph-bar-container-${index}`} 
                >
                    <div className="bar-graph-bar-padding" style={{height: `${100-percentage}%`}} />
                    <div
                        className="bar-graph-bar"
                        style={{
                            height:`${percentage}%`, 
                            background: colors.at(1-index)
                        }}
                    />
                </div>
                <Typography.Title className={`bar-graph-col-value`} level={4}>{item.value}</Typography.Title>
                {item.label && <Typography.Text className={`bar-graph-col-label bar-graph-col-${index}-label`}>{item.label}</Typography.Text>}
            </div>
            );
        })}
    </div>);
}
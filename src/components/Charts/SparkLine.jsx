import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

function SparkLine({ id, height, width, color, data, type, currentColor }) {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType="Numeric"
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			type={type}
			xName="xval"
			yName="yval"
			tooltipSettings={{
				visible: true,
				format: "${x} : data ${y}",
				trackLineSettings: {
					visible: true,
				},
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
}

export default SparkLine;

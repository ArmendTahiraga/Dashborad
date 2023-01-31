import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Sort,
	ContextMenu,
	Filter,
	Selection,
	Page,
	Search,
	Edit,
	Toolbar,
	Inject,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

function Customers() {
	return (
		<div className="m-2 md:m-4 md:mt-6 p-2 md:p-8 bg:white rounded-3xl">
			<Header title="Customers" />
			<GridComponent
				id="gridcomp"
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete"]}
				editSettings={{ allowDeleting: true, allowEditing: true }}
				width="auto"
			>
				<ColumnsDirective>
					{customersGrid.map((order, index) => (
						<ColumnDirective key={index} {...order} />
					))}
				</ColumnsDirective>
				<Inject services={[Sort, Filter, Page, Edit, Toolbar, Selection]} />
			</GridComponent>
		</div>
	);
}

export default Customers;

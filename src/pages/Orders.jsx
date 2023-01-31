import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ContextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

function Orders() {
	return (
		<div className="m-2 md:m-4 md:mt-6 p-2 md:p-8 bg:white rounded-3xl">
			<Header title="Orders" />
			<GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
				<ColumnsDirective>
					{ordersGrid.map((order, index) => (
						<ColumnDirective key={index} {...order} />
					))}
				</ColumnsDirective>
				<Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
			</GridComponent>
		</div>
	);
}

export default Orders;

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
	Search,
	Edit,
	Toolbar,
	Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, ContextMenuItems, employeesGrid } from "../data/dummy";
import { Header } from "../components";

function Employees() {
	return (
		<div className="m-2 md:m-4 md:mt-6 p-2 md:p-8 bg:white rounded-3xl">
			<Header title="Employees" />
			<GridComponent id="gridcomp" dataSource={employeesData} allowPaging allowSorting toolbar={["Search"]} width="auto">
				<ColumnsDirective>
					{employeesGrid.map((order, index) => (
						<ColumnDirective key={index} {...order} />
					))}
				</ColumnsDirective>
				<Inject services={[Resize, Sort, ContextMenu, Filter, Page, Edit, Search, Toolbar]} />
			</GridComponent>
		</div>
	);
}

export default Employees;

import React from "react";
function Header({ title }) {
	return (
		<div className="mb-10">
			<p className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</p>
		</div>
	);
}

export default Header;

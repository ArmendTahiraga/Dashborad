import React from "react";
function Button({ bgColor, color, size, text, borderRadius, hov }) {
	const hoverCSS = "hover:rounded-md";

	return (
		<button
			type="button"
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text-${size} p-3 hover:drop-shadow-xl ${hov ? hoverCSS : ""}`}
		>
			{text}
		</button>
	);
}

export default Button;

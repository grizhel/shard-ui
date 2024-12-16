import React, { useEffect, useState } from "react";
import ShardDiv from "../ShardDiv";
import { NavLink, useLocation } from "react-router";
import ShardA from "../ShardA";

export default function ShardSidebarNavlinkItem(props) {
	const initClasses = `shard-sidebar-navlink-item ${props.className ?? ""}`;
	const location = useLocation();
	const [classNames, setClassNames] = useState(initClasses);
	useEffect(() => {
		if (location.pathname.includes(`${props.href}`)) {
			setClassNames(initClasses + " shard-sidebar-navlink-item-selected");
		} else {
			setClassNames(initClasses);
		}
	}, [location]);

	return (
		<ShardA href={props.href} className={classNames}>
			{props.text}
		</ShardA>
	);
}

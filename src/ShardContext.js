import React, { useEffect, useState } from "react";
import "./css/shard.css";

export default function ShardContext(props) {
	useEffect(() => {
		document.getElementsByTagName("body")[0].classList.add("shard-body");
	}, []);
	return props.children;
}

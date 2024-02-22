import { SectionTitle } from "./../components/SectionTitle";
import { DayCard } from "./../components/DayCard";
import { customFetch } from "../utils";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BreadCrumb from "@/components/BreadCrump";
const url = "/sdm";
export const loader = (store) => async () => {
	const user = store.getState().userState.user;

	const response = await customFetch(url, {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	});
	const data = response?.data;
	// console.log(data);
	return { data };
};
const Dotnet = () => {
	const { data } = useLoaderData();
	const [sortedData, setSortedData] = useState([]);
	useEffect(() => {
		if (data) {
			const sorted = [...data].sort((a, b) => a.day - b.day);
			setSortedData(sorted);
		}
	}, [data]);
	return (
		<section className='mx-auto w-[80%] h-screen pt-10'>
			<SectionTitle title='Software Development Methodology' />
			<BreadCrumb />
			<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-10  h-[30rem] md:h-[35rem] overflow-y-scroll  snap-y'>
				{sortedData.map((element) => {
					const { _id, day, title, Description } = element;
					return (
						<DayCard
							section={"sdm"}
							key={day}
							_id={_id}
							title={title}
							Description={Description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Dotnet;

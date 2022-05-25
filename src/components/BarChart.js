import React,{useEffect, useRef, useState} from 'react'
import * as d3 from 'd3';
import graphSmall from '../images/graphSmall.PNG'
import BarChartStyle from '../styles/BarChart.module.css'


const sample = [
	{category:'A', quantity: 40},
	{category:'B', quantity: 79},
	{category:'C', quantity: 100},
	{category:'D', quantity: 86}
]

const BarChart = () => {
	const [values,setValues] = useState([
		{category:'A', quantity: 40},
		{category:'B', quantity: 79},
		{category:'C', quantity: 100},
		{category:'D', quantity: 86}
	])


const d3Chart = useRef()
// Ref for updating dimention 
const [dimensions, setDimensions] = useState({
	width: window.innerWidth,
	height: window.innerHeight
})
// Ref for resize event update
const update = useRef(false)

useEffect(()=>{

	// Listen for any resize event update
	window.addEventListener('resize', ()=>{
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight
		})

		// If resize, remove the previous chart
		if(update.current){
			d3.selectAll('g').remove()
		} else {update.current = true}
	})

	// Draw chart using the data and updated dimensions
	DrawChart(values,dimensions)

})

const margin = {top: 50, right:30, bottom: 30, left:60}

function DrawChart(data, dimensions){

	// console.log(dimensions.width, dimensions.height)

	const chartwidth = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
	const chartheight = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom


	const svg = d3.select(d3Chart.current)
					.attr('width', chartwidth + margin.left + margin.right)
					.attr('height', chartheight + margin.top + margin.bottom)

	// x scale
	const x = d3.scaleBand()
				.domain(d3.range(data.length))
				.range([margin.left, chartwidth - margin.right])
				.padding(0.1)

	svg.append('g')
		.attr('transform', 'translate(0,'+ chartheight + ')')
		.call(d3.axisBottom(x).tickFormat(i=>data[i].category).tickSizeOuter(0))
		.attr("font-size", '20px')

	const max = d3.max(data, function(d){return d.quantity})

	// y scale
	const y = d3.scaleLinear()
				.domain([0, max])
				.range([chartheight, margin.top])

	svg.append('g')
		.attr('transform', 'translate(' + margin.left + ',0)')
		.call(d3.axisLeft(y))
		.attr("font-size", '20px')

	// Draw bars
	svg.append('g')
		.attr('fill','violet')
		.selectAll('rect')
		.data(data)
		.join('rect')
			.attr('x', (d,i) => x(i))
			.attr('y', d => y(d.quantity))
			.attr('height', d=>y(0)-y(d.quantity))
			.attr('width', x.bandwidth())
}

const generateNewBarChart = () => {
	const newQuantity1 = Math.floor(Math.random() * 100) + 1;
	const newQuantity2 = Math.floor(Math.random() * 100) + 1;
	const newQuantity3 = Math.floor(Math.random() * 100) + 1;
	const newQuantity4 = Math.floor(Math.random() * 100) + 1;

	// let t = [...values]
	// let u = {...t[0]};
	// u.quantity = newQuantity1;
	// t[0] = u;
	setValues([
		{category:'A', quantity: newQuantity1},
		{category:'B', quantity: newQuantity2},
		{category:'C', quantity: newQuantity3},
		{category:'D', quantity: newQuantity4}
	]
		
	);

	// values[1].quantity = newQuantity2;
	// values[2].quantity = newQuantity3;
	// values[3].quantity = newQuantity4;

	console.log(values);


}


return (
	<section>
		<div id='d3demo' className={BarChartStyle.chart__container}>
	  		<svg ref={d3Chart}></svg>
		</div>
		<button onClick={generateNewBarChart} className={BarChartStyle.button__generate}>Generate Bar Chart</button>
	</section>
	
)
}

export default BarChart
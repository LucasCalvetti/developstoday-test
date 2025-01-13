"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PopulationCount {
    year: number;
    value: number;
}

interface PopulationChartProps {
    populationData: PopulationCount[];
}

export default function PopulationChart({ populationData }: PopulationChartProps) {
    const data = {
        labels: populationData.map(d => d.year),
        datasets: [
            {
                label: "Population",
                data: populationData.map(d => d.value),
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Population Over Time",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
}

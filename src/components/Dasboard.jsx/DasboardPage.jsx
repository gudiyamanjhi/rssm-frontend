import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';

function DasboardPage() {

    const [allStudents, setAllStudents] = useState([])
    const [allTeachers, setAllTeachers] = useState([])

    async function getStudents() {
        try {
            const res = await axios.get("http://localhost:8000/student/allStudents");
            setAllStudents(res.data.user);
        } catch (error) {
            console.log(error);
        }
    };

    async function getTeacher() {
        await axios.get("http://localhost:8000/teacher/allTeachers").then((res) => {
            // console.log(res.data.user)
            setAllTeachers(res.data.user)
        });
    };

    useEffect(() => {
        getStudents()
        getTeacher()
    }, [])

    // Chart Data
    const chartData = allStudents.reduce((acc, student) => {
        const admissionMonth = student?.admissionMonth;
        const existing = acc.find((item) => item?.admissionMonth === admissionMonth);

        if (existing) {
            existing.count += 1;
        } else {
            acc.push({
                admissionMonth,
                count: 1,
            });
        }
        return acc;

    }, []);

    console.log(chartData);

    return (
        <>
            <div className='dashboard-page'>
                <h1 style={{
                    textAlign: "center",
                    margin: "10px 0px",
                    marginBottom: "20px",
                    color: "blue",
                    textDecorationLine: "underline"
                }}>
                    RSSM PG COLLEGE
                </h1>

                <div className="dash-stats">
                    <div className="dash-cards">
                        <h5>Total Students</h5>
                        <h2>{allStudents.length}</h2>
                    </div>

                    <div className="dash-cards">
                        <h5>All TEACHERS</h5>
                        <h2>{allTeachers.length}</h2>
                    </div>

                    <div className="dash-cards">
                    </div>

                </div>

                <div style={{ padding: "20px" }}>



                    <div style={{ display: "flex" }}>
                        <BarChart
                            className='chart-box'
                            dataset={chartData}
                            xAxis={[
                                {
                                    scaleType: "band",
                                    dataKey: "admissionMonth",
                                },
                            ]}
                            series={[
                                {
                                    dataKey: "count",
                                    label: "admissionDate",
                                },
                            ]}
                            width={400}
                            height={300}
                        />

                        <LineChart
                            className='chart-box'
                            dataset={chartData}
                            xAxis={[
                                {
                                    scaleType: "point",
                                    dataKey: "admissionMonth",
                                },
                            ]}
                            series={[
                                {
                                    dataKey: "count",
                                    label: "Teacher",
                                    curve: "natural",
                                    area: true,
                                    color: "green"
                                },
                            ]}
                            width={400}
                            height={300}
                        />
                    </div>

                </div>
            </div>

        </>
    )
}

export default DasboardPage
import React, {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";
import {API} from "../../../api/API";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import ErrorBox from "../../ErrorBox";
import {Grid} from "@material-ui/core";


class RelocationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null
        };
    }

    componentDidMount() {
        API.getRelocationStatistics().then((res) => {
            this.setState({
                item: res.data,
                isLoaded: true
            })
        }).catch((error) =>
            this.setState({
                isLoaded: true,
                error: error
            })
        )
    }

    render() {
        if(this.state.error) {
            return <ErrorBox />;
        } else if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        }

        console.log('relocatedMales' + this.state.item.relocatedMales);

        return (
            <Grid container>
                <Grid item>
                    {handleBaseRelocationStatistics(getComparisonData(this.state.item), '#8884d8')}
                </Grid>
                <Grid item>
                    {handleBaseRelocationStatistics(getComparisonData(this.state.item), '#82ca9d')}
                </Grid>
            </Grid>
        );

    }

}

function getComparisonData(item) {
    let relocated= item.russianRelocatedRecords / item.allRussianRecords * 100;

    return [
        {
            name: 'Сменившие место жительства',
            value: relocated
        },
        {
            name: 'Оставшиеся на месте (тот же город)',
            value: 100 - relocated
        }
    ];
}

function handleBaseRelocationStatistics(data, color) {
    return (
        <ResponsiveContainer width={1200} height={700}>
            <BarChart
                style={{width: '100%', height: '100%'}}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill={color} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default RelocationTab;
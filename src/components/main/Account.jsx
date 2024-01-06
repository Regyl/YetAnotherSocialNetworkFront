import {Component} from "react";
import {Grid, TextField} from "@material-ui/core";
import HeaderBar from "./HeaderBar";
import {withRouter} from "react-router-dom";
import {API} from "../../api/API";
import {Autocomplete} from "@material-ui/lab";

class Account extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            countries: [],
            cities: []
        };
    }

    componentDidMount() {
        API.DICTIONARIES.getCatalogRecords('COUNTRY').then((res) => {
            this.setState({
                countries: res.data,
                isLoaded: true
            })
        }).catch((err) => {
            this.setState({
                isLoaded: true,
                error: err
            })
        });

        API.DICTIONARIES.getCatalogRecords('CITY').then((res) => {
            this.setState({
                cities: res.data,
                isLoaded: true
            })
        }).catch((err) => {
            this.setState({
                isLoaded: true,
                error: err
            })
        });
    }

    render() {
        return (
            <Grid container style={{width: '100%'}} direction={'column'} justifyContent={'center'} spacing={3}>
                <HeaderBar />
                <Grid item style={{width: '15%'}}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={this.state.countries}
                        style={{width: '100%'}}
                        getOptionLabel={(option) => option.label || ""}
                        renderInput={(params) => <TextField {...params} label="Country" />}
                    />
                </Grid>
                <Grid item style={{width: '15%'}}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={this.state.cities}
                        style={{width: '100%'}}
                        getOptionLabel={(option) => option.label || ""}
                        renderInput={(params) => <TextField {...params} label="City" />}
                    />
                </Grid>
            </Grid>
        );
    }

}

export default withRouter(Account);
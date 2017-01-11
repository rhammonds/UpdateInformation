
var YouTypeFrame = React.createClass({
    render: function () {
        return(
            <div>
                <h1>You typed:</h1>
                <br/>
                <table class="table borderless" style={{marginBottom:10}}>
                    <tr>
                        <td style={{padding: 0, paddingLeft:12, margin:0, minWidth: 110}}>
                            <label className="control-label">Name:</label>
                        </td>
                        <td style={{padding: 0, paddingLeft:12, margin: 0}}>
                            <label id="Label1" className="control-label">{this.props.nameInfo}</label>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: 0, paddingLeft:12, margin:0, minWidth: 110}}>
                            <label className="control-label">Address:</label>
                        </td>
                        <td style={{padding: 0, paddingLeft:12, margin: 0}}>
                            <label id="Label1" className="control-label">{this.props.addressInfo}</label>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: 0, paddingLeft:12, margin:0, minWidth: 110}}>
                            <label className="control-label">City:</label>
                        </td>
                        <td style={{padding: 0, paddingLeft:12, margin: 0}}>
                            <label id="Label1" className="control-label">{this.props.cityInfo}</label>
                        </td>
                    </tr>
                </table>
            </div>
            )
    }
})

var App = React.createClass({
    getInitialState: function () {
        return { nameInfo: "", addressInfo: "", cityInfo:"" }
    },
    handleKeyPress: function (e) {
        //var x = this.state.nameInfo + String.fromCharCode(e.which);
        
        //alert(String.fromCharCode(e.which));
        //this.setState({ nameInfo: String.fromCharCode(e.which) });
        //this.state.nameInfo += String.fromCharCode(e.which);
        var x = document.getElementById('NameInfo').value;
        this.setState({ nameInfo: x });

        x = document.getElementById('AddressInfo').value;
        this.setState({ addressInfo: x });

        x = document.getElementById('CityInfo').value;
        this.setState({ cityInfo: x });
    },

    render: function () {

        return(
            <div>    
                <h1>Enter Information</h1>
                <br />                             
                <div className="form-group" style={{margin:0, marginBottom:5, padding: 0}}>
                    <label htmlFor="NameInfo" className="control-label col-md-4">Name:</label>
                    <div className="col-md-8">
                        <input type="text" id="NameInfo" className="form-control" onKeyUp={this.handleKeyPress} />
                    </div>
                </div>

                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <label htmlFor="AddressInfo" className="control-label col-md-4">Address:</label>
                    <div className="col-md-8">
                        <input type="text" id="AddressInfo" className="form-control" onKeyUp={this.handleKeyPress}/>
                    </div>
                </div>

                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <label htmlFor="CityInfo" className="control-label col-md-4">City:</label>
                    <div className="col-md-8">
                        <input type="text" id="CityInfo" className="form-control" onKeyUp={this.handleKeyPress}/>
                    </div>
                </div>
                <br />
                 <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <YouTypeFrame nameInfo={this.state.nameInfo} addressInfo={this.state.addressInfo} cityInfo={this.state.cityInfo} />
                 </div>
            </div>
        )
    }
})


ReactDOM.render(<App />, document.getElementById('container'));
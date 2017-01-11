var MileageListFrame = React.createClass({
    render: function () {
        return (
            <div>
                {
                    this.props.items.map(function (i) {
                    return (
                    <div><label>{i.mpgInfo}</label><br/></div>);
                })}
            </div>
          )
        }
    });

var YouTypeFrame = React.createClass({
    render: function () {
        return(
            <div>
                <h1>You typed:</h1>
                <br/>
                <table class="table borderless" style={{marginBottom:10}}>
                    <tr>
                        <td style={{padding: 0, paddingLeft:12, margin:0, minWidth: 110}}>
                            <label className="control-label">Date:</label>
                        </td>
                        <td style={{padding: 0, paddingLeft:12, margin: 0}}>
                            <label id="Label1" className="control-label">{this.props.dateInfo}</label>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: 0, paddingLeft:12, margin:0, minWidth: 110}}>
                            <label className="control-label">Miles:</label>
                        </td>
                        <td style={{padding: 0, paddingLeft:12, margin: 0}}>
                            <label id="Label1" className="control-label">{this.props.milesInfo}</label>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: 0, paddingLeft:12, margin:0, minWidth: 110}}>
                            <label className="control-label">Gallons:</label>
                        </td>
                        <td style={{padding: 0, paddingLeft:12, margin: 0}}>
                            <label id="Label1" className="control-label">{this.props.gallonsInfo}</label>
                        </td>
                    </tr>
                </table>
            </div>
            )
    }
})

function calculateMpg(miles, gallons) {
    var mpg = 0;
    if (gallons > 0) {
        var mpg = (miles / gallons).toFixed(2);
    };
    return mpg;
}

var App = React.createClass({
    getInitialState: function () {
        return {
            miles: 0, gallons: 0, mpgInfo: 0, mileageList:[]             
        }
    },
    handleMileageChange: function (e) {
        this.setState({ miles: e.target.value });        
        var mpg = calculateMpg(e.target.value, this.state.gallons);
        this.setState({ mpgInfo: mpg });
    },
    handleGallonsChange: function (e) {
        this.setState({ gallons: e.target.value });        
        var mpg = calculateMpg(this.state.miles, e.target.value);
        this.setState({ mpgInfo: mpg });
    },
    addToMileageList() {
        var mpg = this.state.mpgInfo;
        if (mpg == null) { return };

        var mileageListData = this.state.mileageList;
        mileageListData.push(
            {
                dateInfo: this.state.dateInfo,
                miles: this.state.miles,
                gallons: this.state.gallons,
                mpgInfo: this.state.mpgInfo

            });

        this.setState({ mileageList: mileageListData });
     
        this.setState({ dateInfo: null });
        this.setState({ miles: null });
        this.setState({ gallons: null });
        this.setState({ mpgInfo: null });
    },
    render: function () {
        var mileageList = this.state.mileageList;
        return (
            
            <div>    
                <h1>Enter Information</h1>
                <br />                             
                <div className="form-group" style={{margin:0, marginBottom:5, padding: 0}}>
                    <label htmlFor="DateInfo" className="control-label col-md-4">Date:</label>
                    <div className="col-md-8">
                        <input type="text" id="DateInfo" className="form-control" value={this.state.dateInfo}/>
                    </div>
                </div>

                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <label htmlFor="MilesInfo" className="control-label col-md-4">Miles:</label>
                    <div className="col-md-8">
                        <input type="text" id="MilesInfo" className="form-control" value={this.state.miles} onChange={this.handleMileageChange.bind(this)}/>
                    </div>
                </div>

                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <label htmlFor="GallonsInfo" className="control-label col-md-4">Gallons:</label>
                    <div className="col-md-8">
                        <input type="text" id="GallonsInfo" className="form-control" value={this.state.gallons} onChange={this.handleGallonsChange.bind(this)}/>
                    </div>
                </div>
                <br />
                <br />
                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <label htmlFor="GallonsInfo" className="control-label col-md-4">MPG:</label>
                     <div className="col-md-8">
                        <label className="control-label col-md-4">{this.state.mpgInfo}</label>
                     </div>
                 </div>
                <br /><br />
                <br />
                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <button class="btn btn-primary bt-lg" id="addButton" onClick={this.addToMileageList} >Add</button>
                </div>
                <div className="form-group" style={{ margin: 0, marginBottom: 5, padding: 0 }}>
                    <label className="control-label col-md-4">Mileage List</label>
                    <br/>                   
                    <MileageListFrame items={mileageList} />
                </div>
            </div>
        )
    }
})

ReactDOM.render(<App />, document.getElementById('container'));

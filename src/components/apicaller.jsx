import React, { Component } from "react";
import axios from "axios";

class ApiCaller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalog: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://d8pswne378.execute-api.ca-central-1.amazonaws.com/dev/last-item"
      )
      .then((reponse) => {
        console.log(reponse);
        this.setState({ datalog: reponse.data.body });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { datalog } = this.state;

    return (
      <React.Fragment>
        <div>
          {datalog.length
            ? datalog.map((log) => (
                <div key={log.id}>
                  Temperature: <b>{log.json.temp}°C</b>
                  <div>
                    Humidity: <b>{log.json.humd}%</b>
                  </div>
                  <div>
                    Pressure: <b>{log.json.pres} Pa</b>
                  </div>
                  <div>
                    Time: <b>{log.datetime}</b>
                  </div>
                </div>
              ))
            : null}
        </div>
      </React.Fragment>
    );
  }
}

export default ApiCaller;

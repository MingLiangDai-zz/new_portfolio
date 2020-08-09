/* global Chart */

import React from "react";

class Tracker extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      home_count: 0,
      projects_count: 0,
      fun_count: 0,
    };
  }

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    var state = this.state;
    if (this.props.current_page === "Home") {
      state = {
        ...state,
        count: state.count + 0.1,
        home_count: state.home_count + 0.1,
      };
    } else if (this.props.current_page === "Projects") {
      state = {
        ...state,
        count: state.count + 0.1,
        projects_count: state.projects_count + 0.1,
      };
    } else if (this.props.current_page === "The Fun Stuff") {
      state = {
        ...state,
        count: state.count + 0.1,
        fun_count: state.fun_count + 0.1,
      };
    }
    this.setState(state);
    setTimeout(this.tick, 100);
  };

  render() {
    const { home_count, projects_count, fun_count } = this.state;
    return (
      <div className="tracker">
        {this.props.current_page === "The Fun Stuff" && (
          <div>
            <h4>
              You have spent a good {this.state.count.toFixed(1)}s on my
              website. The distirbution of your time spent is shown below in the
              pie graph.
            </h4>
            <Graph
              key={this.state.count}
              home_count={home_count}
              projects_count={projects_count}
              fun_count={fun_count}
            />
          </div>
        )}
      </div>
    );
  }
}

class Graph extends React.Component {
  componentDidMount() {
    const { home_count, projects_count, fun_count } = this.props;
    const labels = ["Home", "Projects", "The Fun Stuff"];
    const data = [
      home_count.toFixed(1),
      projects_count.toFixed(1),
      fun_count.toFixed(1),
    ];
    const backgroundColors = [
      "rgba(54, 162, 235, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
    ];

    const elem = document.getElementById("time-graph");
    if (elem) {
      const ctx = elem.getContext("2d");
      var total_company = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColors,
              borderColor: "rgba(0,0,0,0)",
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Time Spent on Each Page",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "white",
            },
          },
          animation: {
            animateRotate: false,
          },
          tooltips: {
            enabled: false,
          },
        },
      });
    }
  }

  render() {
    return <canvas id="time-graph"></canvas>;
  }
}

export default Tracker;

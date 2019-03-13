import React, { Component } from "react";
class Tech extends Component {
  state = {
    up: this.props.upP,
    down: this.props.downP,
    name: this.props.nameP,
    desc: this.props.descP,
    url: this.props.urlP
  };

  // constructor() {
  //     super();
  //     this.handleDownVote = this.handleDownVote.bind(this)
  //     this.handleUpVote = this.handleUpVote.bind(this);
  // }

  handleVote = vote => {
    if (vote === "up") this.setState({ up: this.state.up + 1 });
    else this.setState({ down: this.state.down - 1 });
  };


  render() {
    return (
      <ul className="list-group list-group-flush">
        <div className="list-group-item">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.state.name} <a href={this.state.url}><small>Link</small></a></h5>
              <h6 className="card-subtitle mb-2 text-muted">{this.state.desc}</h6>
              <span className="badge badge-warning m-2">
              {this.formatVotes(this.state.up)}
            </span>
            <button
              onClick={() => this.handleVote('up')}
              className="btn btn-primary btn-sm m-2"
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
            <span className="badge badge-warning m-2">
              {this.formatVotes(this.state.down)}
            </span>
            <button
              onClick={() => this.handleVote('down')}
              className="btn btn-danger btn-sm m-2"
            >
              <i className="fas fa-thumbs-down"></i>


            </button>
            </div>
          </div>
          {/* <div className="tech">
            {this.props.children}
            
           
          </div> */}
        </div>
      </ul>
    );
  }
  formatVotes(votes) {
    return votes === 0 ? "Zero" : votes;
  }
}

export default Tech;

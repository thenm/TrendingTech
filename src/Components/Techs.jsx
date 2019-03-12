import React, { Component } from "react";
import Tech from "./Tech";
class Techs extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    techs: [
      {
        up: 0,
        down: 0,
        desc: 'This is description for Angular',
        url: 'http://angular.io',
        name: "Angular"
      },
      {
        up: 0,
        down: 0,
        desc: 'This is desc for React',
        url: 'http://angular.io',
        name: "React"
      }
    ]
  };

  // renderTechs() {
  //   if (this.state.techs.length === 0)
  //     return (
  //       <div className="alert alert-danger" role="alert">
  //         Nothing Over here
  //       </div>
  //     );
  //   return (
  //     <div className="container">
  //       {this.state.techs.map(function(t) {
  //         return <Tech key={t.id} upP={t.up} downP={t.down} onDelete={this.handleDelete}>
  //           <h4>{t.name}</h4>
  //         </Tech>;
  //       })}
  //     </div>
  //   );
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(previousState => ({
      techs: [...previousState.techs, {name: this.name.value, desc: this.desc.value, up: 0, down: 0 }]
  }));
  }
  render() {
    return (
      <div className="container">
        <form className="m-2" onSubmit={this.handleSubmit}>
          <input className="m-2" placeholder="Name" type="text" ref={(name) => this.name = name} required></input>
          <input className="m-2" placeholder="Description" type="text" ref={(desc) => this.desc = desc} required></input>
          <input className="m-2" placeholder="Official Url" type="text" ref={(url) => this.url = url} required></input>

          <input className="m-2" type="submit"></input>
        </form>
        {this.state.techs.map(function(t, index) {
          return <Tech key={index} upP={t.up} downP={t.down} descP={t.desc} urlP={t.url} nameP={t.name}>
            <h4>{t.name}</h4>
          </Tech>;
        })}
      </div>
    )
  }
}

export default Techs;

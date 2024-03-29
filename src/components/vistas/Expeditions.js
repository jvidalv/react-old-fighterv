import React, {Component} from 'react';
import Zonas from './Zonas';
import mapa from '../../images/map.png'
import goblin_camp from '../../images/goblin_camp.png'

class Expeditions extends Component {

    constructor(p) {
        super(p);
        this.state = {
            pj: this.props.personaje,
            fighting: this.props.fighting,
            zone: this.props.zone,
        }
    }

    _zone() {
        if (this.state.fighting == 1) {
            return (
                <div key={Math.random()} className={`expeditions-map fighting-no ${this.state.zone}`}
                     style={{backgroundImage: `url(${goblin_camp})`}}>
                    <div>
                        <h4 className="titulo">Goblin camp</h4>
                    </div>
                    <div className="titulo-lucha">
                        <h5> Are you sure? </h5>
                        <div className="d-flex">
                            <button type="button" className="btn btn-dark"
                                    onClick={() => this.setState({fighting: 2})}>Yes, fight!
                            </button>
                            <button type="button" className="btn btn-dark"
                                    onClick={() => this.setState({fighting: 0, zone: undefined})}>No, go back
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.fighting == 2) {
            setTimeout(() => this.setState({fighting: 3}), 1000);
            return (
                <div className={`expeditions-map fighting-no-2 ${this.state.zone}`}
                     style={{backgroundImage: `url(${goblin_camp})`}}>
                    <div>
                        <h4 className="titulo">Goblin camp</h4>
                    </div>
                </div>
            )
        } else if (this.state.fighting == 3) {
            return <Zonas raidfinalizada={this.props.raidfinalizada} personaje={this.state.pj} zone={this.state.zone}/>
        }
    }


    render() {
        if (this.state.pj) {
            if (!this.state.fighting) {
                return (
                    <div className="expeditions-map" style={{backgroundImage: `url(${mapa})`}}>
                        <div className="expedition-selector">
                            <h4 className="titulo">Choose an expedition</h4>
                            <ul className="list-group">
                                <li onClick={() => this.setState({zone: 'goblin_camp', fighting: 1})}
                                    className="list-group-item d-flex justify-content-between align-items-center">Goblin
                                    camp
                                    <span className="badge badge-success badge-pill">
                  lvl 1
                </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center desactivado">
                                    Raiders village
                                    <span className="badge badge-warning badge-pill">
                  lvl 7
                </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center desactivado">Dragon
                                    cave
                                    <span className="badge badge-danger badge-pill">lvl 15</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            } else {
                return (this._zone())
            }
        }
    }

}

export default Expeditions;

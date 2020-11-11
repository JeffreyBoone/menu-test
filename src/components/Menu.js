import React, {Component} from 'react'
import './menu.css';

export default class Sidebar extends Component {
constructor(props) {
    super(props)

    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
      activeIndex: 0
    }
}

toggleClass(index, e) {
    this.setState({ activeIndex: index });
};

render(){
    return(<div>
        <div id="sidebar">
            <div className="nav">
                <ul className="dashboard-menu">
                    {this.renderSidebarMenuItems}
                    <li className={this.state.activeIndex===0 ? 'active': null}  onClick={this.toggleClass.bind(this, 0)}>Menu item 1</li>
                    <li className={this.state.activeIndex===1 ? 'active': null}  onClick={this.toggleClass.bind(this, 1)}>Menu item 2</li>
                    <li className={this.state.activeIndex===2 ? 'active': null}  onClick={this.toggleClass.bind(this, 2)}>Menu item 3</li>
                    <li className={this.state.activeIndex===3 ? 'active': null}  onClick={this.toggleClass.bind(this, 3)}>Menu item 4</li>
                </ul>
            </div>
        </div>
        {/* copy */}
        <div id="sidebar">
        <div className="nav">
            <ul className="dashboard-menu">
                {this.renderSidebarMenuItems}
                <li className={this.state.activeIndex===0 ? 'active': null}  onClick={this.toggleClass.bind(this, 0)}>Menu item 1</li>
                <li className={this.state.activeIndex===1 ? 'active': null}  onClick={this.toggleClass.bind(this, 1)}>Menu item 2</li>
                <li className={this.state.activeIndex===2 ? 'active': null}  onClick={this.toggleClass.bind(this, 2)}>Menu item 3</li>
                <li className={this.state.activeIndex===3 ? 'active': null}  onClick={this.toggleClass.bind(this, 3)}>Menu item 4</li>
            </ul>
        </div>
    </div></div>
    )
}
}
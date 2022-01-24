import React from "react";

class Hide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true,
            text: 'Hi today first day of using show/hide component'
        };
    }
    componentDidMount(){
        alert(`Показать компонент?${!this.state.isShow}`)
    }
    componentDidUpdate() {
        alert(`Спрятать компонент? ${!this.state.isShow}`);
    }

    render(){
        return (
            <div>
                <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
                    show or hide
                </button>
                {this.state.isShow && <div>{this.state.text}</div>}
            </div>
        )}
}
export default Hide
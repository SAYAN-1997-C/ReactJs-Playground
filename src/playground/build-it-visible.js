class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this)
        this.state = {
            visiblity : false
        }
    }
    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                visiblity : !prevState.visiblity,
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>
                    {this.state.visiblity ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visiblity && (
                    <div>
                        <p>Hey, There is some details you can  now see !</p>
                    </div>
                )}
            </div>
        );
    }
}


ReactDOM.render(<VisiblityToggle />, document.getElementById('app'))
// let visiblity = false;

// const toggleVisiblity = () => {
//     visiblity = !visiblity;
//     render()
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={toggleVisiblity}>
//                 {visiblity ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visiblity && (
//                 <div>
//                     <p>Hey. There are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
import React, { Component } from 'react';

class Snippet extends Component {
    render() {
        return (
            <div className="container border">
                <h3>Code Snippet</h3>
Below is a list of all available snippets and the triggers of each one. The ⇥ means the TAB key.
<br></br>
Trigger	Content
rcc→	class component skeleton <br></br>
rrc→	class component skeleton with react-redux connect <br></br>
rrdc→	class component skeleton with react-redux connect and dispatch <br></br>
rccp→	class component skeleton with prop types after the class <br></br>
rcjc→	class component skeleton without import and default export lines <br></br>
rcfc→	class component skeleton that contains all the lifecycle methods <br></br>
rwwd→	class component without import statements <br></br>
rpc→	class pure component skeleton with prop types after the class <br></br>
rsc→	stateless component skeleton <br></br>
rscp→	stateless component with prop types skeleton <br></br>
rscm→	memoize stateless component skeleton <br></br>
rscpm→	memoize stateless component with prop types skeleton <br></br>
rsf→	stateless named function skeleton <br></br>
rsfp→	stateless named function with prop types skeleton <br></br>
rsi→	stateless component with prop types and implicit return <br></br>
fcc→	class component with flow types skeleton <br></br>
fsf→	stateless named function skeleton with flow types skeleton <br></br>
fsc→	stateless component with flow types skeleton <br></br>
rpt→	empty propTypes declaration <br></br>
rdp→	empty defaultProps declaration <br></br>
con→	class default constructor with props <br></br>
conc→	class default constructor with props and context <br></br>
est→	empty state object <br></br>
cwm→	componentWillMount method <br></br>
cdm→	componentDidMount method <br></br>
cwr→	componentWillReceiveProps method <br></br>
scu→	shouldComponentUpdate method <br></br>
cwup→	componentWillUpdate method <br></br>
cdup→	componentDidUpdate method <br></br>
cwun→	componentWillUnmount method <br></br>
gsbu→	getSnapshotBeforeUpdate method <br></br>
gdsfp→	static getDerivedStateFromProps method <br></br>
cdc→	componentDidCatch method <br></br>
ren→	render method <br></br>
sst→	this.setState with object as parameter <br></br>
ssf→	this.setState with function as parameter <br></br>
props→	this.props <br></br>
state→	this.state <br></br>
bnd→	binds the this of method inside the constructor <br></br>
disp→	MapDispatchToProps redux function <br></br>
The following table lists all the snippets that can be used for prop types. Every snippet regarding prop types begins with pt so it's easy to group it all together and explore all the available options. On top of that each prop type snippets has one equivalent when we need to declare that this property is also required.
<br></br>
For example pta creates the PropTypes.array and ptar creates the PropTypes.array.isRequired

Trigger	Content 
pta→	PropTypes.array,  <br></br>
ptar→	PropTypes.array.isRequired, <br></br>
ptb→	PropTypes.bool, <br></br>
ptbr→	PropTypes.bool.isRequired,  <br></br>
ptf→	PropTypes.func,  <br></br>
ptfr→	PropTypes.func.isRequired,  <br></br>
ptn→	PropTypes.number,  <br></br>
ptnr→	PropTypes.number.isRequired,  <br></br>
pto→	PropTypes.object,  <br></br>
ptor→	PropTypes.object.isRequired, <br></br>
pts→	PropTypes.string,  <br></br>
ptsr→	PropTypes.string.isRequired,  <br></br>
ptsm→	PropTypes.symbol,  <br></br>
ptsmr→	PropTypes.symbol.isRequired,  <br></br>
ptan→	PropTypes.any,  <br></br>
ptanr→	PropTypes.any.isRequired,  <br></br>
ptnd→	PropTypes.node,  <br></br>
ptndr→	PropTypes.node.isRequired,  <br></br>
ptel→	PropTypes.element,  <br></br>
ptelr→	PropTypes.element.isRequired, <br></br>
pti→	PropTypes.instanceOf(ClassName),  <br></br>
ptir→	PropTypes.instanceOf(ClassName).isRequired,  <br></br>
pte→	PropTypes.oneOf(['News', 'Photos']),  <br></br>
pter→	PropTypes.oneOf(['News', 'Photos']).isRequired,  <br></br>
ptet→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  <br></br>
ptetr→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  <br></br>
ptao→	PropTypes.arrayOf(PropTypes.number),  <br></br>
ptaor→	PropTypes.arrayOf(PropTypes.number).isRequired,  <br></br>
ptoo→	PropTypes.objectOf(PropTypes.number), <br></br>
ptoor→	PropTypes.objectOf(PropTypes.number).isRequired, <br></br>
ptoos→	PropTypes.objectOf(PropTypes.shape()), <br></br>
ptoosr→	PropTypes.objectOf(PropTypes.shape()).isRequired,

            </div>
        );
    }
}

export default Snippet;

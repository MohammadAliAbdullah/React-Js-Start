import React, { Component } from 'react';

class Dom extends Component {
    render() {
        return (
            <div className="container border">
                <h3>22. React-DOM</h3>
                What is ReactDOM?
                <p>
                    ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing following methods and a few more.
                </p>
                <p>

                    <li>render() </li>
                    <li>hydrate()</li>
                    <li>unmountComponentAtNode()</li>
                    <li>findDOMNode()</li>

                    <li> createPortal()</li>
                </p>
                Pre-requisite: To use the ReactDOM in any React web app we must first import ReactDOM from the react-dom package by using the following code snippet:
                <h4>import ReactDOM from 'react-dom'</h4>
                <div>
                    <h3 className="border border-danger">1. render() Function</h3>
                    <p>This is one of the most important methods of ReactDOM. This function is used to render a single React Component or several Components wrapped together in a Component or a div element. This function uses the efficient methods of React for updating the DOM by being able to change only a subtree, efficient diff methods etc.</p>
                    <p>Syntax:</p>
                    <h4> ReactDOM.render(element, container, callback)</h4>
<strong>Parameters:</strong> This method can take a maximum of three parameters as described below.
                <li><strong>element:</strong> This parameter expects a JSX expression or a React Element to be rendered.</li>
                    <li><strong>container:</strong> This parameter expects the container in which the element has to be rendered.</li>
                    <li><strong>callback:</strong> This is an optional parameter that expects a function that is to be executed once the render is complete.</li>
                    <p><strong>Return Type:</strong> This function returns a reference to the component or null if a stateless component was rendered. </p>
                </div>
                <div>
                    <h3 className="border border-danger">2. hydrate() Function</h3>
                    <p>This is one of the most important methods of ReactDOM. This function is used to render a single React Component or several Components wrapped together in a Component or a div element. This function uses the efficient methods of React for updating the DOM by being able to change only a subtree, efficient diff methods etc.</p>
                    <p>Syntax:</p>
                    <h4> ReactDOM.hydrate(element, container, callback)</h4>
<strong>Parameters:</strong> This method can take a maximum of three parameters as described below.
                <li><strong>element:</strong> This parameter expects a JSX expression or a React Element to be rendered.</li>
                    <li><strong>container:</strong> This parameter expects the container in which the element has to be rendered.</li>
                    <li><strong>callback:</strong> This is an optional parameter that expects a function that is to be executed once the render is complete.</li>
                    <p><strong>Return Type:</strong> This function returns a reference to the component or null if a stateless component was rendered. </p>
                </div>
                <div>
                    <h3 className="border border-danger">3. unmountComponentAtNode() Function</h3>
                    <p>This function is used to unmount or remove the React Component that was rendered to a particular container. As an example, you may think of a notification component, after a brief amount of time it is better to remove the component making the web page more efficient.

</p>
                    <p>Syntax:</p>
                    <h4>ReactDOM.unmountComponentAtNode(container)</h4>
<strong>Parameters:</strong> This method takes a single parameter container which expects the DOM container from which the React component has to be removed.

<li><strong>element:</strong> This parameter expects a JSX expression or a React Element to be rendered.</li>
                    <li><strong>Return Type:</strong> This function returns true on success otherwise false.</li>
                </div>
                <div>
                    <h3 className="border border-danger">4. findDOMNode() Function</h3>
                    <p>
                        This function is generally used to get the DOM node where a particular React component was rendered. This method is very less used as the following can be done adding a ref attribute to each component itself.</p>
                    <p>Syntax:</p>
                    <h4> ReactDOM.findDOMNode(component)</h4>
<strong>Parameters:</strong> This method can take a maximum of three parameters as described below.
                <li><strong>Parameters:</strong> This method takes a single parameter component which expects a React Component to be searched in the Browser DOM.

</li>
                    <li><strong>Return Type:</strong> This function returns the DOM node where the component was rendered on success otherwise null.

</li>
                </div>
                <div>
                    <h3 className="border border-danger">5. createPortal() Function</h3>
                    <p>Usually, when an element is returned from a component’s render method, it’s mounted on the DOM as a child of the nearest parent node which in some cases may not be desired. Portals allow us to render a component into a DOM node that resides outside the current DOM hierarchy of the parent component.</p>
                    <p>Syntax:</p>
                    <h4> ReactDOM.createPortal(child, container)</h4>
                    <strong>Parameters:</strong> This method takes two parameters as described below.
                <li><strong>child:</strong> This parameter expects a JSX expression or a React Component to be rendered.</li>
                    <li><strong>container:</strong> This parameter expects the container in which the element has to be rendered.</li>

                    <p><strong>Return Type:</strong> This function returns nothing.</p>
                </div>
                <div>
                    <h4 className="border border-info">Important Points to Note:</h4>
                    <li>
                        ReactDOM.render() replaces the child of the given container if any. It uses highly efficient diff algorithm and can modify any subtree of the DOM.
                    </li>
                    <li>
                        findDOMNode() function can only be implemented upon mounted components thus Functional components can not be used in findDOMNode() method.
                    </li>
                    <li>
                        ReactDOM uses observables thus provides an efficient way of DOM handling.
                    </li>
                    <li>
                        ReactDOM can be used in both client-side and server-side.
                    </li>
                </div>
            </div >
        );
    }
}

export default Dom;
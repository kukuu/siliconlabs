# REACT ToDo App

When you want to access this.props in constructor.

Passing:

```
class MyComponent extends React.Component {    
    constructor(props) {
        super(props)

        console.log(this.props)
        // -> { icon: 'home', … }
    }
}

```


Not passing:

```
class MyComponent extends React.Component {    
    constructor(props) {
        super()

        console.log(this.props)
        // -> undefined

        // Props parameter is still available
        console.log(props)
        // -> { icon: 'home', … }
    }

    render() {
        // No difference outside constructor
        console.log(this.props)
        // -> { icon: 'home', … }
    }
}

```


Note that passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.
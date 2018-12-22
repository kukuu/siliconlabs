

# React-Datasheet
A simple react component to create a spreadsheet. 

Current features:
* Select cells, copy-paste cells
* Navigation using keyboard keys
* Deletion using keyboard keys
* Callbacks for onChange, valueRenderer(visible data)
* dataRenderer(underlying data in the input, takes the value by default)


## Installation

Install from npm: 
```bash
$ npm install react-datasheet --save
```
Import in your project:

```javascript
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
```

## Usage

React-Datasheet generates a table with the cells. Double-clicking or typing edits the value and if changed, initiates an onChange callback. 

The data provided should be an array of rows, and each row should include the cells.

### Basic Usage
```jsx
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [{value:  1}, {value:  3}],
        [{value:  2}, {value:  4}]
      ]
    }
  }
  render () {
    return (
      <ReactDataSheet 
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onChange={(cell, colI, rowJ, value) => 
          this.setState({
            grid: this.state.grid.map((col) => 
              col.map((rowCell) => 
                (rowCell == cell) ? ({value: value}) : rowCell
              )
            )
          }) 
        }
      />
    )
  }
}
```

### Cells with underlying data

There are two values that each cell shows. The first is via ```valueRenderer``` and the second is via ```dataRenderer```. When a cell is in *edit mode*, it will show the value returned from ```dataRenderer```. It needs to return a string as this value is set in an input field.
Each of these callbacks are passed the cell value as well as the cell's coordinates in the spreadsheet. This allows you to apply formatting logic at rendering time, such as *all cells in the third column should be formatted as dates*.

```jsx 
const grid = [
   [{value:  5, expr: '1 + 4'}, {value:  6, expr: '6'}, {value: new Date('2008-04-10')}],
   [{value:  5, expr: '1 + 4'}, {value:  5, expr: '1 + 4'}, {value: new Date('2004-05-28')}]
]
const onChange = (cell, i, j, newValue) => console.log("New expression :" + newValue)
<ReactDataSheet 
  data={grid}
  valueRenderer={(cell, i, j) => j == 2 ? cell.value.toDateString() : cell.value}
  dataRenderer={(cell, i, j) => j == 2 ? cell.value.toISOString() : cell.expr}
  onChange={} 
/>
```

### Cells with underlying component

```jsx 
const grid = [
   [{
    value:  5, 
      component: ( 
        <button onClick={() => console.log("clicked")}}>
          Rendered
        </button>
      )
    }]
]
<ReactDataSheet 
  data={grid}
  valueRenderer={(cell) => cell.value}
/>
```
This renders a single cell with the value 5. Once in edit mode, the button will appear.


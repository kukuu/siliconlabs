/**
 * Connected HOC renders component with state 
 */

import { initStore } from '../../state/store'
import withRematch from '../../state/utils/withRematch'

export default function(ComposedClass, mapState, mapDispatch) {    
    const Component = props => {
        return (
            <ComposedClass {...props} />
        )
    }
    return withRematch(initStore, mapState, mapDispatch)(Component)
};
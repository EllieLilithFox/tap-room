import React from 'react';
import KegList from './KegList'
import { v4 } from 'uuid';

class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      kegList: [
        {
          id: v4(),
          name: "Bottom Shelf Brew",
          brand: "OnTap",
          pints: 124,
          price: 3,
          alcoholContent: 4
        },
        {
          id: v4(),
          name: "Middle of the Line",
          brand: "OnTap",
          pints: 124,
          price: 4,
          alcoholContent: 5
        },
        {
          id: v4(),
          name: "Top Shelf Brew",
          brand: "OnTap",
          pints: 124,
          price: 5,
          alcoholContent: 6
        }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <KegList kegList={this.state.kegList} />
      </React.Fragment>
    )
  }
}

export default KegControl
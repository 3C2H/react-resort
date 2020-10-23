import React, {Component} from 'react'
import {RoomContext} from '../context'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import defaultBcg from '../images/room-1.jpeg'

class SingleRoom extends Component {
  constructor (props) {
    super (props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    }
  }

  static contextType = RoomContext

  render () {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)

    if (!room) {
      return (
        <div className='error'>
          <h3>room not found</h3>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link> 
        </div>
      )
    } else return (
      <div>
        SINGLE ROOM {room.name}
      </div>
    )
  }
}

export default SingleRoom

import React from 'react'
import Poem from 'components/Poem'
import {Link} from 'gatsby'
import Layout from 'components/Layout'

const TheTop = () => {
    return(
<Layout title='The Top | Seasons of Thought | D.S. Chapman' path="/poetry/seasons-of-thought/the-top/">
    <Poem title='The Top'>
        {`Phrases turn to meet their twisting needs
till like a spinning, wobbling top
the meaning falls away.

This is the game at which we play
like children in the rain,
who spin and laugh and spin again–
why should they ever change?

The gyre spins the ship around
in part because it can.
To question it, to tame the wind,
beyond the scope of man.

The world it laughs with every wind,
it cries with every gull,
it spins with every lover's heart,
and with their children falls.
The very force that turns the world
is turning at us all.`}
</Poem>
<p><em>This poem is found in the collection <Link to="poetry/seasons-of-thought">Seasons of Thought</Link></em></p>
</Layout>
    )
}
export default TheTop
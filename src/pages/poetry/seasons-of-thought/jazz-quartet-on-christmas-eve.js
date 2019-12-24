import React from 'react'
import Poem from 'components/Poem'
import {Link} from 'gatsby'
import Layout from 'components/Layout'
import card from './holly.jpg'

const Jazz = () => {
    return(
<Layout title='Jazz Quartet on Christmas Eve  | Seasons of Thought | D.S. Chapman' path="/poetry/seasons-of-thought/jazz-quartet-on-christmas-eve/" image={card} description="The rain snapped a snare drum beat on the thatch. It's steady tip tap echoed from the top.">
    <Poem title='Jazz Quartet on Christmas Eve'>
        {`The rain snapped a snare drum beat on the thatch.
Its steady tip tap echoed from the top

till it hit the ears of the two stabled
together amid the straw with a splash.

One drop made no difference on her brow, drenched
with the drained sweat from her young pain-drawn face.

The beat of the jazz quartet continued;
two slow trumpets from a neighboring stall

joined the stable snare, improvising round
the last member of this impromptu band,

whose high wailing voice in a minor key
and impassioned face painted the pain

of the world as her husband looked on, wishing
to conduct the band in this song he could

not play, but supporting his singing wife
with shaking hands and eyes steady in love.

There was no silence in the barn that night
only a song that ripped at more than ears,

backed by the melancholy beat of years
accustomed to such violent agony.`}
</Poem>
<p><em>This poem is found in the collection <Link to="poetry/seasons-of-thought">Seasons of Thought</Link></em></p>
</Layout>
    )
}
export default Jazz
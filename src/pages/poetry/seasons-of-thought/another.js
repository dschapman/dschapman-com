import React from 'react'
import Poem from 'components/Poem'
import {Link} from 'gatsby'
import Layout from 'components/Layout'

const Another = () => {
    return(
<Layout title='Another  | Seasons of Thought | D.S. Chapman' path="/poetry/seasons-of-thought/another/">
    <Poem title='Another'>
        {`Without another eye
to move my gaze from where it rests
I would not see the little things;
my words could not astonish me.

Without another ear
to hear the words I thought I said
I would not care to check my thoughts;
I would not think to fear the truth.

Without another voice
to question what I really meant
and push against my words with words,
the tongue would hush within my mind.

But eye, and ear, and voice, and mind
combine to find a fitting form
to bring before their foreign friend–
a poem to surprise us both.`}
</Poem>
<p><em>This poem is found in the collection <Link to="poetry/seasons-of-thought">Seasons of Thought</Link></em></p>
</Layout>
    )
}
export default Another
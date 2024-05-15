import {onRedirect} from '../env/env'
import {type PropertyPageProps} from '../env/types'

const Property = ({property}: PropertyPageProps) => {
    return (
        <>
            <image src={property.image} class='photo' />
            <h2>{property.title}</h2>

            <div class='items small'>
                <h4 class='pale'>Type: {property.category}</h4>
                <h4 class='pale'>Cost: {property.cost}₽</h4>
            </div>

            <button><a href='/properties'>Back</a></button>
        </>
    )
}

export default Property
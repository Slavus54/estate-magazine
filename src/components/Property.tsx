import {onRedirect} from '../env/env'
import {type PropertyPageProps} from '../env/types'

const Property = ({property}: PropertyPageProps) => {
    return (
        <>
            <img src={property.image} className='photo' />
            <h2>{property.title}</h2>

            <div className='items small'>
                <h4 className='pale'>Type: {property.category}</h4>
                <h4 className='pale'>Cost: {property.cost}₽</h4>
            </div>

            <button><a href='/properties'>Back</a></button>
        </>
    )
}

export default Property
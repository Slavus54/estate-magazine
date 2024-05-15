import {useState, useMemo, useEffect} from 'react'
//@ts-ignore
import Centum from 'centum.js'
import properties from '../env/properties.json'
import {SQUARE_LIMIT, DEFAULT_PERCENT, onRedirect} from '../env/env'
import {type PropertyTownsProps, type PropertyType, type SearchedRegion} from '../env/types'

const centum = new Centum()

const Properties = (props: PropertyTownsProps) => {
    const [region, setRegion] = useState<string>('')
    const [square, setSquare] = useState<number>(0)
    const [percent, setPercent] = useState<number>(DEFAULT_PERCENT)
    const [filtered, setFiltered] = useState<PropertyType[]>([])   

    useMemo(() => {
        let result: SearchedRegion = props.towns.find(el => centum.search(el.title, region, DEFAULT_PERCENT))?.title

        if (result !== undefined) {
            setRegion(result)
        }
    }, [region])

    useMemo(() => {
        let result: number = centum.part(percent, SQUARE_LIMIT, 0)

        setSquare(result)
    }, [percent])

    useEffect(() => {
        let result: PropertyType[] = properties.filter(el => el.square <= square)

        if (region !== '') {
            result = result.filter(el => centum.search(el.region, region, 1e2))
        }
      
        setFiltered(result)
    }, [region, square])

    return (
        <>
            <h2>Find Property</h2>

            <input value={region} onChange={e => setRegion(e.target.value)} placeholder='Enter a region' type='text' />

            <h4 className='pale'>Max Square: <b>{square}m<sup>2</sup></b></h4>
            <input value={percent} onChange={e => setPercent(parseInt(e.target.value))} type='range' step={1} />

            <div className='items half'>
                {filtered.map(el => 
                    <div onClick={() => onRedirect(`/properties/${el.id}`)} className='item panel'>
                        {centum.shorter(el.title)}
                        <p className='pale'>{el.category}</p>
                    </div>
                )}
            </div>
           
        </>
    )
} 

export default Properties
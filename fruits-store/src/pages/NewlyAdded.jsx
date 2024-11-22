import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { getNewlyAdded } from '../api/Api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const NewlyAdded = () => {
    const [newlyadded, setNewlyAdded] = useState(null)
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [fitlerProduct, setFilterProduct] = useState([])
    async function fetchData() {
        try {
            const res = await getNewlyAdded()
            if (res.status === 200) {
                setNewlyAdded(res.data)
                setFilterProduct(res.data)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setQuery(query)

        if (newlyadded) {
            const filtered = newlyadded.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
            setFilterProduct(filtered)
        }
    };


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <Loader2 className='text-lime-500 h-14 w-14 animate-spin' />
                </div>
            </>
        )
    }
    if (!newlyadded || newlyadded.length === 0) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <TriangleAlert className='text-orange-400 h-12 w-12' />
                    <p>
                        No Newly Added Fruits Available !
                    </p>
                </div>
            </>
        )
    }

    // const img = "https://loremflickr.com/640/480/cats"
    // const name = "Bespoke Fresh Mouse"
    // const price = "101.00"
    return (
        <>
            <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>

                {newlyadded.map((newlyadded, index) => (
                    <Cards img={newlyadded.img} name={newlyadded.title} price={newlyadded.price} key={newlyadded._id} />
                ))
                }
             </div> 
           
                
            
        </>
    )
}

export default NewlyAdded
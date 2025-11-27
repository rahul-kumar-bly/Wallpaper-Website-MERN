import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

export default function EnhanceImage({url}) {

    const [error, setError] = useState([])
    const [eScaleUrl, setEScaleUrl] = useState('')

    useEffect(() => {

        const urlSplit = url.split('/')
        const newUrl = urlSplit.slice(0, 6).concat(['e_gen_restore']).concat(urlSplit.slice(6)).join('/')
        console.log('new url is', newUrl)
        setEScaleUrl(newUrl)
    }, []);

    console.log('value of noRes is')

    return (
        <>
            <Link className='w-[50%] p-3 uppercase rounded-sm bg-[#3e5749] text-white font-semibold text-center hover:opacity-95 border-emerald-950' to={eScaleUrl} target='_blank'  >
                Download Enhanced Version
            </Link>
        </>
    )
}
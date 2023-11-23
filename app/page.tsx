import Image from 'next/image'
import Pagination from './components/Pagination'

export default function Home() {
  return (
    <Pagination itemCount={100} currentPage={10} pageSize={10}/>
  )
}  
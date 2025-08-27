import { StrictMode } from 'react'
import Navbar from './Navbar'
import BodyStructure from './BodyStructure'
import Footer from './Footer'


function Home(){
	return(
		<StrictMode>
			<Navbar/>
			<BodyStructure/>
			<Footer/>
		</StrictMode>
	)	
} 

export default Home 
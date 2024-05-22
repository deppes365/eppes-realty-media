import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/ Portfolio';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase.config';

function App() {
	const [appData, setAppData] = useState(null);
	const [loading, setLoading] = useState(false);
	

	useEffect(() => {
		if(!appData) {
			setLoading(true);
			const getData = async () => {
				const docRef = doc(db, 'app', 'siteData');
				const docSnap = await getDoc(docRef);
	
				if (docSnap.exists()) {
					
					setAppData(docSnap.data());
					setLoading(false)
				} else {
					// docSnap.data() will be undefined in this case
					console.log('No such document!');
				}
			};
	
			getData();
		}
	}, [appData, loading]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home  homeData={appData?.home} loading={loading}/>}
				/>
				<Route
					path="/services"
					element={<Services servicesData={appData?.services} loading={loading}/>}
				/>
				<Route
					path="/portfolio"
					element={<Portfolio portfolioData={appData?.portfolio} loading={loading}/>}
				/>
				<Route path='/contact' element={<Contact contactData={appData?.contact} />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;

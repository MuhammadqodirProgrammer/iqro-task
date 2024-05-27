import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { Home } from './pages/Home/Home';
import { Statistic } from './pages/Statistic/Statistic';
function Routers() {
	return (
		<Layout>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/statistic' element={<Statistic />} />
			</Routes>
		</Layout>
	);
}

export default Routers;

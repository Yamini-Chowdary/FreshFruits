import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards';
import {
  getUsersCount,
  getOrdersCount,
  getBasicFruitsCount,
  getDryFruitsCount,
  getExoticFruitsCount,
  getOrganicFruitsCount,
  getSeasonalFruitsCount,
  getFruitBasketsCount,
} from '../../api/Api';

const AdminDashboard = () => {
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [basicfruits, setBasicfruits] = useState(0);
  const [dryfruits, setDryfruits] = useState(0);
  const [exoticfruits, setExoticfruits] = useState(0);
  const [organicfruits, setOrganicfruits] = useState(0);
  const [seasonalfruits, setSeasonalfruits] = useState(0);
  const [fruitbaskets, setFruitbaskets] = useState(0);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount();
      if (userresponse.status === 200) setUsers(userresponse.data.count);

      const orderresponse = await getOrdersCount();
      if (orderresponse.status === 200) setOrders(orderresponse.data.count);

      const basicfruitsresponse = await getBasicFruitsCount();
      if (basicfruitsresponse.status === 200) setBasicfruits(basicfruitsresponse.data.count);

      const dryfruitsresponse = await getDryFruitsCount();
      if (dryfruitsresponse.status === 200) setDryfruits(dryfruitsresponse.data.count);

      const exoticfruitsresponse = await getExoticFruitsCount();
      if (exoticfruitsresponse.status === 200) setExoticfruits(exoticfruitsresponse.data.count);

      const organicfruitsresponse = await getOrganicFruitsCount();
      if (organicfruitsresponse.status === 200) setOrganicfruits(organicfruitsresponse.data.count);

      const seasonalfruitsresponse = await getSeasonalFruitsCount();
      if (seasonalfruitsresponse.status === 200) setSeasonalfruits(seasonalfruitsresponse.data.count);

      const fruitbasketsresponse = await getFruitBasketsCount();
      if (fruitbasketsresponse.status === 200) setFruitbaskets(fruitbasketsresponse.data.count);
    } catch (error) {
      toast.error('Failed to fetch data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Polling for real-time updates every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <AdminDashboardHomeCards
        users={users}
        orders={orders}
        basicfruits={basicfruits}
        dryfruits={dryfruits}
        exoticfruits={exoticfruits}
        organicfruits={organicfruits}
        seasonalfruits={seasonalfruits}
        fruitbaskets={fruitbaskets}
      />
    </div>
  );
};

export default AdminDashboard;
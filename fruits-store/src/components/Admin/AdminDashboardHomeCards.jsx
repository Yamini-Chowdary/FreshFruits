import React from 'react';
import { Users, ShoppingCart, Package2, Grape, Vegan,  Apple, Cherry,Citrus } from 'lucide-react';

const AdminDashboardHomeCards = ({
  orders,
  users,
  basicfruits,
  exoticfruits,
  organicfruits,
  seasonalfruits,
  fruitbaskets,
  dryfruits,
}) => {
  // Reusable Card Component
  const Card = ({ count, label, Icon }) => (
    <div className="flex flex-col items-center justify-between w-[22%] h-[25vh] p-4 shadow-md rounded-md hover:shadow-purple-200 hover:text-lime-600 bg-white">
      <div className="w-full h-[40%] flex justify-center items-center">
        <Icon className="w-10 h-10 text-lime-600" />
      </div>
      <div className="w-full h-[60%] flex flex-col justify-start items-center">
        <p className="text-3xl font-bold text-black">{count}</p>
        <p className="text-sm font-semibold mt-2">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-10 bg-gray-50">
      <div className="w-[90%] flex flex-wrap justify-evenly gap-6">
        {/* Cards */}
        <Card count={users} label="Users" Icon={Users} />
        <Card count={orders} label="Orders" Icon={ShoppingCart} />
        <Card count={basicfruits} label="Basic Fruits" Icon={Citrus } />
        <Card count={exoticfruits} label="Exotic Fruits" Icon={Apple} />
        <Card count={dryfruits} label="Dry Fruits" Icon={Cherry} />
        <Card count={organicfruits} label="Organic Fruits" Icon={Vegan} />
        <Card count={seasonalfruits} label="Seasonal Fruits" Icon={Grape} />
        <Card count={fruitbaskets} label="Fruit Baskets" Icon={Package2} />
      </div>
    </div>
  );
};

export default AdminDashboardHomeCards;

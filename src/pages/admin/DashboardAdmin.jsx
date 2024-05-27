import React from 'react';
import { SidebarAdmin } from '../../components/admin/SidebarAdmin';
import { TableAdmin } from '../../components/admin/TableAdmin';

export default function DashboardAdmin() {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
      <SidebarAdmin />
      <div className='flex-grow p-4'>
        <TableAdmin />
      </div>
    </div>
  );
}

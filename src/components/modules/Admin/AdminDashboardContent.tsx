"use client";

import AppointmentBarChart from "@/components/shared/AppointmentBarChart";
import AppointmentPieChart from "@/components/shared/AppointmentPieChart";
import StatsCard from "@/components/shared/StatsCard";
import { getDashboardData } from "@/services/dashboard.services";
import { ApiResponse } from "@/types/api.types";
import { IAdminDashboardData } from "@/types/dashboard.types";
import { useQuery } from "@tanstack/react-query";

const AdminDashboardContent = () => {
  const { data: adminDashboardData, isLoading } = useQuery({
    queryKey: ["admin-dashboard-data"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: "always",
  });

  const { data } = (adminDashboardData ||
    {}) as ApiResponse<IAdminDashboardData>;

  if (isLoading) {
    return <div className="text-center py-10">Loading Dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <StatsCard
          title="Total Appointments"
          value={data?.appointmentCount || 0}
          iconName="CalendarDays"
          description="Number of appointments scheduled"
          className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-100"
        />

        <StatsCard
          title="Total Patients"
          value={data?.patientCount || 0}
          iconName="Users"
          description="Number of patients registered"
          className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-100"
        />
      </div>

      {/* Charts Section */}
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold mb-4">Appointment Overview</h3>

          <AppointmentBarChart data={data?.barChartData || []} />
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold mb-4">
            Appointment Distribution
          </h3>

          <AppointmentPieChart data={data?.pieChartData || []} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;

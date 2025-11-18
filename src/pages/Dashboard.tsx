import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="2,847"
          change="+12.5% from last month"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Total Content"
          value="1,294"
          change="+8.2% from last month"
          icon={FileText}
          trend="up"
        />
        <StatCard
          title="Engagement Rate"
          value="68.4%"
          change="+4.1% from last month"
          icon={TrendingUp}
          trend="up"
        />
        <StatCard
          title="Active Sessions"
          value="432"
          change="-2.3% from last hour"
          icon={Activity}
          trend="down"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { user: "John Doe", action: "created a new post", time: "2 minutes ago" },
              { user: "Jane Smith", action: "updated profile settings", time: "15 minutes ago" },
              { user: "Bob Johnson", action: "uploaded 3 files", time: "1 hour ago" },
              { user: "Alice Brown", action: "commented on a post", time: "2 hours ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.user}</p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Performance metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Page Views", value: "45,892", color: "bg-accent" },
              { label: "New Signups", value: "387", color: "bg-primary" },
              { label: "Conversion Rate", value: "3.24%", color: "bg-green-500" },
              { label: "Bounce Rate", value: "42.1%", color: "bg-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${stat.color}`} />
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

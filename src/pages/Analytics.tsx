import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Clock } from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">Track your performance metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Views", value: "124,892", icon: Eye, color: "text-accent" },
          { title: "Unique Visitors", value: "45,231", icon: Users, color: "text-primary" },
          { title: "Avg. Duration", value: "4:32", icon: Clock, color: "text-green-600" },
          { title: "Growth Rate", value: "+24.3%", icon: TrendingUp, color: "text-orange-600" },
        ].map((stat, i) => (
          <Card key={i} className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Traffic Overview</CardTitle>
          <CardDescription>Visitor statistics for the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Chart visualization would go here
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;

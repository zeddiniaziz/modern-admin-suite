import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";

const Content = () => {
  const contentItems = [
    { id: 1, title: "Getting Started Guide", type: "Article", date: "2025-11-15", status: "Published" },
    { id: 2, title: "Product Updates Q4", type: "Blog Post", date: "2025-11-10", status: "Draft" },
    { id: 3, title: "User Tutorial Video", type: "Video", date: "2025-11-08", status: "Published" },
    { id: 4, title: "FAQ Documentation", type: "Article", date: "2025-11-05", status: "Published" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Content</h1>
          <p className="text-muted-foreground mt-1">Manage your content library</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <FilePlus className="mr-2 h-4 w-4" />
          New Content
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contentItems.map((item) => (
          <Card key={item.id} className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.date}</span>
                <span className={`font-medium ${item.status === 'Published' ? 'text-green-600' : 'text-orange-600'}`}>
                  {item.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Content;

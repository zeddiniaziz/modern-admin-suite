import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Messages = () => {
  const messages = [
    { id: 1, from: "support@example.com", subject: "Help with account setup", preview: "I'm having trouble setting up my account...", time: "10 min ago", unread: true },
    { id: 2, from: "feedback@example.com", subject: "Feature request", preview: "Would love to see a dark mode option...", time: "1 hour ago", unread: true },
    { id: 3, from: "contact@example.com", subject: "General inquiry", preview: "Is there a mobile app available?", time: "3 hours ago", unread: false },
    { id: 4, from: "sales@example.com", subject: "Partnership opportunity", preview: "We'd like to discuss a potential partnership...", time: "1 day ago", unread: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-1">View and manage your messages</p>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Inbox</CardTitle>
              <CardDescription>You have 2 unread messages</CardDescription>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Mail className="mr-2 h-4 w-4" />
              Compose
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg border transition-colors hover:bg-muted/50 cursor-pointer ${
                message.unread ? 'bg-muted/30 border-accent/20' : 'border-border'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{message.from}</p>
                    {message.unread && <Badge className="bg-accent">New</Badge>}
                  </div>
                  <p className="text-sm font-medium text-foreground mt-1">{message.subject}</p>
                </div>
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{message.preview}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Messages;

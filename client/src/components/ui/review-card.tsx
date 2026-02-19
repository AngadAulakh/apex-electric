import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    location: string;
    rating: number;
    date: string;
    text: string;
    service: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
            />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
          "{review.text}"
        </blockquote>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary font-bold">
              {review.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground">{review.name}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <span>{review.location}</span>
              <span>•</span>
              <span className="text-primary/80">{review.service}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

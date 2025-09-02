import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications: Best Practices for 2024",
      excerpt: "Discover the latest patterns and techniques for creating maintainable and performant React applications that can grow with your business needs.",
      category: "React",
      author: "Alex Johnson",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "The Future of Web Development: Embracing Server Components",
      excerpt: "Explore how React Server Components are changing the way we think about web application architecture and performance optimization.",
      category: "Web Development",
      author: "Alex Johnson",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt: "Deep dive into advanced TypeScript features that will make your code more robust, maintainable, and developer-friendly.",
      category: "TypeScript",
      author: "Alex Johnson",
      date: "Dec 5, 2023",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Database Design Principles for Modern Applications",
      excerpt: "Learn how to design efficient and scalable database schemas that support your application's growth and performance requirements.",
      category: "Database",
      author: "Alex Johnson",
      date: "Nov 28, 2023",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "API Security Best Practices: Protecting Your Backend",
      excerpt: "Essential security measures every developer should implement to protect their APIs from common vulnerabilities and attacks.",
      category: "Security",
      author: "Alex Johnson",
      date: "Nov 20, 2023",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Performance Optimization Techniques for Web Applications",
      excerpt: "Practical strategies to improve your web application's loading times and overall user experience through various optimization techniques.",
      category: "Performance",
      author: "Alex Johnson",
      date: "Nov 15, 2023",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = ["All", "React", "TypeScript", "Web Development", "Database", "Security", "Performance"];

  return (
    <section id="blog" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Blog
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge and insights about web development, best practices, 
              and the latest trends in technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card 
              key={post.title}
              className="mb-12 bg-gradient-card border-border backdrop-blur-sm hover:shadow-elegant transition-all duration-500 overflow-hidden animate-fade-in"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-gradient-hero flex items-center justify-center">
                  <div className="text-muted-foreground">Featured Article Image</div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight hover:text-primary transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card 
                key={post.title}
                className="bg-card/50 border-border backdrop-blur-sm hover:shadow-elegant group transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Article Image</div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-primary hover:text-primary-foreground hover:bg-primary group"
                    >
                      Read
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Posts CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter to get the latest articles and insights 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
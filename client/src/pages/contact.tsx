import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation } from "wouter";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Section } from "@/components/ui/section";
import { COMPANY_INFO, SERVICES } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  urgency: z.string().min(1, "Please select urgency"),
  message: z.string().min(10, "Please provide more details"),
});

export default function Contact() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      urgency: "flexible",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call and persist to localStorage
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newLead = {
      id: Date.now().toString(),
      ...values,
      date: new Date().toISOString(),
      status: "new"
    };
    
    const existingLeads = JSON.parse(localStorage.getItem("apex_leads") || "[]");
    localStorage.setItem("apex_leads", JSON.stringify([newLead, ...existingLeads]));
    
    toast({
      title: "Request Received!",
      description: "We'll be in touch shortly to confirm your appointment.",
    });
    
    setIsSubmitting(false);
    setLocation("/thank-you");
  }

  return (
    <>
      <Section className="bg-slate-50 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your project? Fill out the form below or give us a call.
            We offer free estimates and rapid response times.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Call Us Anytime</p>
                    <p className="text-lg font-bold text-slate-900">{COMPANY_INFO.phone}</p>
                  </div>
                </a>
                
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">{COMPANY_INFO.email}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Service Area</p>
                    <p className="text-lg font-bold text-slate-900">{COMPANY_INFO.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Hours of Operation</p>
                    <p className="text-lg font-bold text-slate-900 whitespace-pre-line">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Emergency Service?</h3>
              <p className="text-slate-300 mb-4">
                If you have a dangerous electrical situation, smoke, or sparks, please call us immediately. Do not use this form.
              </p>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
                <Button variant="destructive" className="w-full font-bold">
                  Call Emergency Line Now
                </Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-heading font-bold mb-6">Request a Quote</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(647) 555-0123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>
                          ))}
                          <SelectItem value="Other">Other / Not Listed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Urgency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need this done?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (Today)</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="flexible">Flexible / Planning Phase</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or electrical issue..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-bold text-lg h-12" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our privacy policy. Your information is secure.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </>
  );
}

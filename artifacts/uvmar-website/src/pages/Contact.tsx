import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message is required")
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-secondary text-white border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to build your clean energy infrastructure? Reach out to our engineering team for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're looking for a rooftop installation, a ground-mounted plant, or want to explore our solar park options, our experts are ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Corporate Office</h3>
                    <p className="text-muted-foreground">
                      UVMAR Clean Energy<br />
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210<br />+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@uvmar.com<br />sales@uvmar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday<br />9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 border border-border shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-8">Send an Inquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="rounded-none border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" type="email" className="rounded-none border-border focus-visible:ring-primary" {...field} />
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
                            <Input placeholder="+91 XXXXX XXXXX" className="rounded-none border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-border focus:ring-primary">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="rooftop">Rooftop Solar</SelectItem>
                            <SelectItem value="ground">Ground-Mounted Solar</SelectItem>
                            <SelectItem value="solarpark">Solar Park Investment</SelectItem>
                            <SelectItem value="om">Operations & Maintenance</SelectItem>
                            <SelectItem value="other">Other Inquiry</SelectItem>
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
                        <FormLabel>Message / Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your energy requirements, location, and timeline..." 
                            className="min-h-[120px] rounded-none border-border focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-14 text-lg font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-muted relative">
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Pune,Maharashtra&zoom=10&size=1000x400&sensor=false')] bg-cover bg-center opacity-50 grayscale mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 shadow-lg border border-border text-center max-w-sm">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">Visit Us</h3>
            <p className="text-muted-foreground text-sm">Our headquarters is located in Pune, allowing us to serve projects effectively across India.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

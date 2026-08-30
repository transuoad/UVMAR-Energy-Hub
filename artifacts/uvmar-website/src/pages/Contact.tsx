import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
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
  leadGeneration: z.string().min(1, "Please select an enquiry purpose"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message is required")
});

const leadGenerationOptions = [
  { value: "quote", label: "Quote", description: "Pricing request for solar installation" },
  { value: "site-survey", label: "Site Survey", description: "On-site technical assessment request" },
  { value: "consultation", label: "Consultation", description: "General discussion on sizing, savings, financing, etc." },
  { value: "feasibility-study", label: "Feasibility Study", description: "Technical/financial viability study for commercial or solar park projects" },
  { value: "callback", label: "Callback", description: "Request for a phone call from our team" },
  { value: "product-information", label: "Product Information", description: "Enquiry about products, OEMs, or technology partners" },
  { value: "amc-om-support", label: "AMC / O&M Support", description: "Maintenance/service request for existing customers" },
  { value: "partnership-dealer-enquiry", label: "Partnership / Dealer Enquiry", description: "Vendors, EPC contractors, dealers" },
] as const;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", leadGeneration: "", service: "", message: "" }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({ title: "Inquiry Received", description: "An engineering representative will contact you shortly." });
      form.reset();
    }, 1000);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-secondary text-secondary-foreground overflow-hidden border-b border-border">
        <div className="absolute inset-0 structural-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary block" />
              <span className="text-primary uppercase tracking-widest text-xs font-bold">Inquiries</span>
              <span className="w-12 h-[2px] bg-primary block" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-[1.1] tracking-tight">
              Contact Division
            </h1>
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-light">
              Ready to build your clean energy infrastructure? Reach out to our engineering team for a technical consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">Direct Channels</h2>
              <p className="text-lg text-muted-foreground mb-12 font-light leading-relaxed">
                Whether you're looking for a rooftop installation, a ground-mounted plant, or want to explore our solar park options, our commercial representatives are ready to assist.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 border-l-2 border-primary pl-6 py-2">
                  <MapPin className="w-6 h-6 text-foreground mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2">Corporate Office</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      UVMAR Clean Energy<br />
                      112, Eldorado Building<br />
                      Nungambakkam High Rd<br />
                      Chennai, Tamil Nadu 600034
                    </p>
                    <a
                      href="https://maps.app.goo.gl/fBH1o5qMBuUqHdtp8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-xs text-foreground font-bold uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      Open Maps <ArrowRight className="w-3 h-3 ml-2" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l-2 border-border pl-6 py-2">
                  <Phone className="w-6 h-6 text-foreground mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 93848 12375</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l-2 border-border pl-6 py-2">
                  <Mail className="w-6 h-6 text-foreground mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">info@uvmar.com<br />sales@uvmar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l-2 border-border pl-6 py-2">
                  <Clock className="w-6 h-6 text-foreground mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2">Operating Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday – Saturday<br />9:00 AM – 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-10 lg:p-12 shadow-sm"
            >
              <h2 className="text-2xl font-display font-medium mb-8">Technical Inquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Representative Name" className="rounded-none border-border bg-background h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="corporate@domain.com" type="email" className="rounded-none border-border bg-background h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
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
                          <FormLabel className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXX XXXXX" className="rounded-none border-border bg-background h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="leadGeneration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Lead Generation</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-border bg-background h-12 focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Select Enquiry Purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border">
                            {leadGenerationOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value} className="py-2">
                                <div className="flex flex-col gap-0.5">
                                  <span>{option.label}</span>
                                  <span className="text-xs text-muted-foreground">{option.description}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Service Sector</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-border bg-background h-12 focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Select Requirement" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border">
                            <SelectItem value="rooftop">Rooftop Solar</SelectItem>
                            <SelectItem value="ground">Ground-Mounted Solar</SelectItem>
                            <SelectItem value="solarpark">Solar Park Investment</SelectItem>
                            <SelectItem value="epc">Complete EPC</SelectItem>
                            <SelectItem value="om">Operations & Maintenance</SelectItem>
                            <SelectItem value="land">Land Procurement</SelectItem>
                            <SelectItem value="transmission">Transmission Infrastructure</SelectItem>
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
                        <FormLabel className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Capacity requirements, timeline, location..."
                            className="min-h-[140px] rounded-none border-border bg-background focus-visible:ring-primary focus-visible:border-primary resize-none"
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
                    className="w-full bg-foreground text-background hover:bg-primary transition-colors rounded-none h-14 text-sm uppercase tracking-widest font-bold mt-4"
                  >
                    {isSubmitting ? "Processing..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] border-t border-border grayscale opacity-90 mix-blend-multiply bg-muted relative pointer-events-none">
        {/* We use a static visual feel for the map container by applying grayscale */}
        <div className="absolute inset-0 pointer-events-auto">
          <iframe
            src="https://maps.google.com/maps?q=Eldorado+Building+112+Nungambakkam+High+Road+Nungambakkam+Chennai+Tamil+Nadu+600034+India&output=embed&hl=en&z=16"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="UVMAR Clean Energy Corporate Office Location"
          />
        </div>
      </section>
    </div>
  );
}

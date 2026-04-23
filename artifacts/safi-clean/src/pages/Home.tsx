import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Mail, Leaf, Shield, CheckCircle2, Clock, Home as HomeIcon, Building2, Bug, Sparkles, Droplets, Users } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Location is required"),
  date: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional()
});

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      location: "",
      date: "",
      notes: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Asante! Request received.",
      description: "We'll call you shortly to confirm your booking.",
    });
    form.reset();
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-[#f9f6ef] shadow-sm">
        <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <span className="font-serif text-xl font-bold text-secondary">Jashel</span>
              <span className="ml-1 hidden text-sm font-medium text-muted-foreground sm:inline-block">Cleaning & Fumigation</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: "Services", href: "#services" },
              { label: "Why Us", href: "#why" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact", href: "#book" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs font-medium text-muted-foreground">Call or WhatsApp</span>
              <a href="https://wa.me/254742890310" target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:underline">
                0742 890 310
              </a>
            </div>
            <Button asChild className="rounded-full px-6">
              <a href="#book">Book Now</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary text-secondary-foreground pt-20 pb-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[rgba(45,170,89,0.08)] blur-2xl"></div>
            <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full bg-[rgba(200,168,75,0.06)] blur-2xl"></div>
            <div className="absolute top-[40%] left-[38%] w-[250px] h-[250px] rounded-full bg-[rgba(23,92,44,0.12)] blur-2xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-8 max-w-screen-2xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                    Celebrating Our First Year!
                  </div>
                  <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white mb-6">
                    A cleaner home.<br/>A healthier workspace.<br/><span className="text-accent">Proudly Kenyan.</span>
                  </h1>
                  <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl">
                    Karibu Jashel. We deliver premium residential cleaning, commercial maintenance, and expert fumigation services across Nairobi and Kiambu. Your peace of mind is our business.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild className="rounded-full text-base h-12 px-8 bg-primary hover:bg-primary/90 text-white">
                      <a href="#book">Get a Free Quote</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="rounded-full text-base h-12 px-8 border-white/20 text-white hover:bg-white/10">
                      <a href="https://wa.me/254742890310" target="_blank" rel="noreferrer">WhatsApp Us</a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Banner */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container px-4 md:px-8 max-w-screen-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
              <div className="text-center px-4">
                <h3 className="text-4xl font-serif font-bold mb-2">1st</h3>
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Year Anniversary</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-4xl font-serif font-bold mb-2">70+</h3>
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Spaces Cleaned</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-4xl font-serif font-bold mb-2">96%</h3>
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Satisfaction Rate</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-4xl font-serif font-bold mb-2">24/7</h3>
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-background">
          <div className="container px-4 md:px-8 max-w-screen-2xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground">Comprehensive cleaning and pest control solutions tailored for your space.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  Icon: HomeIcon,
                  title: "Residential Cleaning",
                  desc: "Deep cleaning for homes, apartments, and post-construction sites. We leave every corner sparkling.",
                  items: ["Sofa & carpet shampooing", "Move-in / move-out cleaning", "Water tank disinfection"],
                },
                {
                  Icon: Building2,
                  title: "Commercial Office",
                  desc: "Reliable recurring contracts for offices, schools, and restaurants to maintain a professional image.",
                  items: ["Daily & weekly contracts", "Post-COVID sanitization", "Garbage collection"],
                },
                {
                  Icon: Bug,
                  title: "Fumigation & Pest",
                  desc: "Safe, effective pest control targeting cockroaches, bedbugs, termites, rodents, and mosquitoes.",
                  items: ["Eco-friendly chemicals", "Preventive treatments", "Emergency response"],
                },
              ].map(({ Icon, title, desc, items }) => (
                <div key={title} className="group rounded-2xl overflow-hidden bg-card border border-border transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative bg-secondary text-secondary-foreground p-8 border-b-2 border-accent/40">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="h-14 w-14 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold">{title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{desc}</p>
                    <ul className="space-y-2 mb-2">
                      {items.map((it) => (
                        <li key={it} className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> {it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-8 max-w-screen-2xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Built on Trust & Hard Work</h2>
              <p className="text-lg text-muted-foreground">
                In our first year of operations, we've learned that a clean space isn't just about appearances&mdash;it's about health, productivity, and peace of mind. Our team is trained, vetted, and dedicated to delivering excellence across Nairobi and Kiambu.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: Shield, title: "Vetted Professionals", desc: "Every member of our staff undergoes rigorous background checks and continuous training." },
                { Icon: Leaf, title: "Safe Products", desc: "We use industry-standard, approved cleaning agents and fumigants safe for families and pets." },
                { Icon: Clock, title: "Reliable Scheduling", desc: "We respect your time. Punctual arrivals and efficient service delivery." },
                { Icon: Users, title: "Local & Trusted", desc: "Proudly Kenyan, serving Nairobi and Kiambu with a personal, neighborly touch." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 bg-background">
          <div className="container px-4 md:px-8 max-w-screen-2xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground">Real feedback from homes and businesses we've served across Nairobi and Kiambu.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Jashel did a deep clean of our 3-bedroom after we moved in. The team arrived on time, was professional, and the place was spotless. Highly recommend.",
                  name: "Wanjiku M.",
                  role: "Homeowner",
                },
                {
                  quote: "We booked them for a full house clean before hosting family. The consistency is what stands out — every room looked brand new. Worth every shilling.",
                  name: "David K.",
                  role: "Homeowner",
                },
                {
                  quote: "Had a serious cockroach issue in our kitchen. Their fumigation was thorough and discreet, done in one visit so we could get back to normal. Problem solved.",
                  name: "Aisha O.",
                  role: "Homeowner",
                },
              ].map((r) => (
                <div key={r.name} className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                  <div className="flex gap-1 text-accent mb-4">
                    {[0,1,2,3,4].map((i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z"/></svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 flex-1">&ldquo;{r.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-serif font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="book" className="py-24 bg-secondary text-secondary-foreground relative">
          <div className="container px-4 md:px-8 max-w-screen-xl relative z-10">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl text-card-foreground">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">Request a Service</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form and our team will get back to you within 2 hours with a custom quote.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h5 className="font-bold">Phone / WhatsApp</h5>
                        <p className="text-muted-foreground">0742 890 310</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h5 className="font-bold">Email</h5>
                        <p className="text-muted-foreground">jashelafrica@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h5 className="font-bold">Service Areas</h5>
                        <p className="text-muted-foreground text-sm">Nairobi, Kiambu and its environs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
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
                                <Input placeholder="07XX XXX XXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Required</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-secondary text-secondary-foreground border-accent/30">
                                  <SelectItem value="residential" className="focus:bg-accent/20 focus:text-accent-foreground data-[highlighted]:bg-accent/20">Residential Cleaning</SelectItem>
                                  <SelectItem value="commercial" className="focus:bg-accent/20 focus:text-accent-foreground data-[highlighted]:bg-accent/20">Commercial/Office Cleaning</SelectItem>
                                  <SelectItem value="fumigation" className="focus:bg-accent/20 focus:text-accent-foreground data-[highlighted]:bg-accent/20">Fumigation & Pest Control</SelectItem>
                                  <SelectItem value="shampoo" className="focus:bg-accent/20 focus:text-accent-foreground data-[highlighted]:bg-accent/20">Sofa/Carpet Shampooing</SelectItem>
                                  <SelectItem value="tank" className="focus:bg-accent/20 focus:text-accent-foreground data-[highlighted]:bg-accent/20">Water Tank Cleaning</SelectItem>
                                  <SelectItem value="other" className="focus:bg-accent/20 focus:text-accent-foreground data-[highlighted]:bg-accent/20">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location (Estate / Area)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Ruaka, Kiambu" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details (Optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us more about what you need..." className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full text-base h-12 bg-primary hover:bg-primary/90 text-white rounded-xl">
                        Submit Request
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
        <div className="container px-4 md:px-8 max-w-screen-2xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-serif text-xl font-bold">Jashel</span>
              </div>
              <p className="text-secondary-foreground/70 max-w-sm mb-6">
                Premium cleaning and fumigation services across Nairobi and Kiambu. Celebrating one year of excellence and trustworthy service.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li>Residential Cleaning</li>
                <li>Commercial Offices</li>
                <li>Fumigation & Pest Control</li>
                <li>Sofa & Carpet Cleaning</li>
                <li>Water Tank Disinfection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li>0742 890 310</li>
                <li>jashelafrica@gmail.com</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/50 flex flex-col md:flex-row items-center justify-between">
            <p>&copy; {new Date().getFullYear()} Jashel Cleaning & Fumigation Services. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Proudly serving Kenya.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

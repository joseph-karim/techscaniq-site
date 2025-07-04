import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Mail, Phone, User } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitResult, setSubmitResult] = React.useState<string>('');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitResult('');
    
    try {
      // Create FormData for Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'aa05e6be-dc77-45e6-8720-47a8d88c1dd1');
      formData.append('subject', 'New Contact Form Submission - TechScanIQ');
      formData.append('from_name', 'TechScanIQ Website');
      formData.append('email', 'contact@techscaniq.com');
      formData.append('cc', 'joseph@alethiai.com,arnab@alethiai.com');
      
      // Add form fields
      formData.append('Name', data.name);
      formData.append('Email', data.email);
      formData.append('Phone', data.phone || 'Not provided');
      formData.append('Message', data.message);
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult('Success! We\'ll get back to you within 24 hours.');
        // Reset form after a short delay
        setTimeout(() => {
          form.reset();
          onClose();
          setSubmitResult('');
        }, 2000);
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitResult('An error occurred. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-space text-brand-black">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-brand-gunmetal font-ibm">
            Have questions about TechScanIQ? We'd love to hear from you.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-brand-black font-ibm flex items-center gap-2">
                    <User className="h-4 w-4 text-brand-teal" />
                    Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      className="bg-white border-gray-300 text-brand-black placeholder:text-gray-400 font-ibm focus:border-brand-teal focus:ring-brand-teal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-brand-black font-ibm flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-teal" />
                    Email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white border-gray-300 text-brand-black placeholder:text-gray-400 font-ibm focus:border-brand-teal focus:ring-brand-teal"
                      {...field}
                    />
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
                  <FormLabel className="text-brand-black font-ibm flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-teal" />
                    Phone (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-white border-gray-300 text-brand-black placeholder:text-gray-400 font-ibm focus:border-brand-teal focus:ring-brand-teal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-brand-black font-ibm">Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      className="bg-white border-gray-300 text-brand-black placeholder:text-gray-400 min-h-[120px] font-ibm focus:border-brand-teal focus:ring-brand-teal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitResult && (
              <div className={`p-4 rounded-lg text-center font-ibm ${
                submitResult.includes('Success') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitResult}
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-300 text-brand-gunmetal hover:bg-gray-50 font-space"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-teal hover:bg-brand-teal/90 text-white font-space font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
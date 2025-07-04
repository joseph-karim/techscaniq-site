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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  websiteUrl: z.string().url('Please enter a valid URL'),
  companyDescription: z.string().optional(),
  reportType: z.enum(['pe-due-diligence', 'sales-intelligence']),
  contactName: z.string().min(1, 'Name is required'),
  contactEmail: z.string().email('Please enter a valid email'),
  contactPhone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ScanRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScanRequestModal({ isOpen, onClose }: ScanRequestModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitResult, setSubmitResult] = React.useState<string>('');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      websiteUrl: '',
      companyDescription: '',
      reportType: 'pe-due-diligence',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitResult('');
    
    try {
      // Create FormData for Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'aa05e6be-dc77-45e6-8720-47a8d88c1dd1');
      formData.append('subject', `New TechScanIQ Scan Request - ${data.companyName}`);
      formData.append('from_name', 'TechScanIQ Website');
      formData.append('email', 'contact@techscaniq.com');
      formData.append('cc', 'joseph@alethiai.com,arnab@alethiai.com');
      
      // Add form fields
      formData.append('Company Name', data.companyName);
      formData.append('Website URL', data.websiteUrl);
      formData.append('Company Description', data.companyDescription || 'Not provided');
      formData.append('Report Type', data.reportType === 'pe-due-diligence' ? 'PE Due Diligence' : 'Sales Intelligence');
      formData.append('Contact Name', data.contactName);
      formData.append('Contact Email', data.contactEmail);
      formData.append('Contact Phone', data.contactPhone || 'Not provided');
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult('Success! Your scan request has been submitted.');
        // Reset form after a short delay
        setTimeout(() => {
          form.reset();
          onClose();
          setSubmitResult('');
        }, 2000);
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitResult('An error occurred. Please try again or contact support.');
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
      <DialogContent className="sm:max-w-[600px] bg-[#0A1A2F] border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Request Technology Scan
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Analyze any website's technology stack, performance, and security
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 p-4 bg-[#1a2b47] rounded-lg border border-gray-700">
          <h4 className="text-sm font-semibold text-[#00C2B2] mb-2">
            What happens after you submit:
          </h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Our AI analyzes the company's technology stack and digital presence</li>
            <li>• We generate a comprehensive report based on your selected criteria</li>
            <li>• You'll receive an email when the report is ready (typically 12-48 hours)</li>
          </ul>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company Information</h3>
              
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Company Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter company name"
                        className="bg-[#1a2b47] border-gray-700 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="websiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Website URL *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com"
                        className="bg-[#1a2b47] border-gray-700 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Company Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Brief description of the company and its business"
                        className="bg-[#1a2b47] border-gray-700 text-white placeholder:text-gray-500 min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reportType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Report Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-[#1a2b47] border-gray-700 text-white">
                          <SelectValue placeholder="Select a report type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#1a2b47] border-gray-700">
                        <SelectItem value="pe-due-diligence" className="text-white hover:bg-[#2a3b57]">
                          PE Due Diligence
                        </SelectItem>
                        <SelectItem value="sales-intelligence" className="text-white hover:bg-[#2a3b57]">
                          Sales Intelligence
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        className="bg-[#1a2b47] border-gray-700 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-[#1a2b47] border-gray-700 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-[#1a2b47] border-gray-700 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {submitResult && (
              <div className={`p-4 rounded-lg text-center ${
                submitResult.includes('Success') 
                  ? 'bg-green-900/20 text-green-400 border border-green-800' 
                  : 'bg-red-900/20 text-red-400 border border-red-800'
              }`}>
                {submitResult}
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-700 text-gray-300 hover:bg-[#1a2b47]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00C2B2] hover:bg-[#00a599] text-black font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Scan Request'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
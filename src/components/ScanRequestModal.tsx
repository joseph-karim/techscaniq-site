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
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] bg-white border-gray-200 flex flex-col p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
          <DialogTitle className="text-2xl font-bold font-space text-brand-black">
            Request Technology Scan
          </DialogTitle>
          <DialogDescription className="text-brand-gunmetal font-ibm">
            Analyze any website's technology stack, performance, and security
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="mt-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-sm font-semibold text-brand-teal mb-2 font-space">
              What happens after you submit:
            </h4>
            <ul className="text-sm text-brand-gunmetal space-y-1 font-ibm">
              <li>• Our AI analyzes the company's technology stack and digital presence</li>
              <li>• We generate a comprehensive report based on your selected criteria</li>
              <li>• You'll receive an email when the report is ready (typically 12-48 hours)</li>
            </ul>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold font-space text-brand-black">Company Information</h3>
                
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-ibm">Company Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter company name"
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
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-ibm">Website URL *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com"
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
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-ibm">Company Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Brief description of the company and its business"
                          className="bg-white border-gray-300 text-brand-black placeholder:text-gray-400 min-h-[80px] font-ibm focus:border-brand-teal focus:ring-brand-teal"
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
                      <FormLabel className="text-brand-black font-ibm">Report Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-gray-300 text-brand-black font-ibm focus:border-brand-teal focus:ring-brand-teal">
                            <SelectValue placeholder="Select a report type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-gray-200">
                          <SelectItem value="pe-due-diligence" className="text-brand-black hover:bg-gray-100 font-ibm">
                            PE Due Diligence
                          </SelectItem>
                          <SelectItem value="sales-intelligence" className="text-brand-black hover:bg-gray-100 font-ibm">
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
                <h3 className="text-lg font-semibold font-space text-brand-black">Contact Information</h3>
                
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-ibm">Name *</FormLabel>
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
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-ibm">Email *</FormLabel>
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
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-ibm">Phone (Optional)</FormLabel>
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
              </div>

              {submitResult && (
                <div className={`p-4 rounded-lg text-center font-ibm ${
                  submitResult.includes('Success') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitResult}
                </div>
              )}
            </form>
          </Form>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-gray-300 text-brand-gunmetal hover:bg-gray-50 font-space"
          >
            Cancel
          </Button>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="bg-brand-teal hover:bg-brand-teal/90 text-white font-space font-medium"
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
      </DialogContent>
    </Dialog>
  );
}
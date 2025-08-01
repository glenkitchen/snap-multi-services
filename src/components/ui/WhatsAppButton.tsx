"use client";

import { MessageOptions, openWhatsApp } from '@/utils/whatsapp';
import { useState } from 'react';

interface WhatsAppButtonProps {
  messageOptions: MessageOptions;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  showIcon?: boolean;
}

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90', 
  outline: 'border-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E]'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2',
  lg: 'px-8 py-4 text-lg'
};

// WhatsApp icon component
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
  </svg>
);

export default function WhatsAppButton({ 
  messageOptions, 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  showIcon = false
}: WhatsAppButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 100));
      openWhatsApp(messageOptions);
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const baseClasses = "rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center gap-2 justify-center";
  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];
  
  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      type="button"
    >
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Connecting...</span>
        </>
      ) : (
        <>
          {showIcon && <WhatsAppIcon className="w-5 h-5" />}
          {children}
        </>
      )}
    </button>
  );
}

// Convenience component for WhatsApp-styled buttons
export function WhatsAppIconButton({ 
  messageOptions, 
  children, 
  size = 'md',
  className = ''
}: Omit<WhatsAppButtonProps, 'variant' | 'showIcon'>) {
  return (
    <WhatsAppButton
      messageOptions={messageOptions}
      variant="whatsapp"
      size={size}
      className={className}
      showIcon={true}
    >
      {children}
    </WhatsAppButton>
  );
}

// Quick action buttons for common use cases
export function QuoteButton({ 
  service, 
  className = '',
  variant = 'primary',
  size = 'md'
}: {
  service?: string;
  className?: string;
  variant?: WhatsAppButtonProps['variant'];
  size?: WhatsAppButtonProps['size'];
}) {
  const buttonText = service?.toLowerCase().includes('free') ? 'Request Free Quote' : 'Get Quote';
  
  return (
    <WhatsAppButton
      messageOptions={{
        messageType: 'quote',
        service: service || 'General Services'
      }}
      variant={variant}
      size={size}
      className={className}
    >
      {buttonText}
    </WhatsAppButton>
  );
}

export function ServiceButton({ 
  service, 
  className = '',
  variant = 'primary',
  size = 'md'
}: {
  service: string;
  className?: string;
  variant?: WhatsAppButtonProps['variant'];
  size?: WhatsAppButtonProps['size'];
}) {
  const buttonText = service.toLowerCase().includes('schedule') ? 'Schedule Service' : 'Request Service';
  
  return (
    <WhatsAppButton
      messageOptions={{
        messageType: 'service',
        service
      }}
      variant={variant}
      size={size}
      className={className}
    >
      {buttonText}
    </WhatsAppButton>
  );
}

export function ProductButton({ 
  product, 
  category, 
  price,
  className = '',
  variant = 'primary',
  size = 'md'
}: {
  product: string;
  category?: string;
  price?: string | number;
  className?: string;
  variant?: WhatsAppButtonProps['variant'];
  size?: WhatsAppButtonProps['size'];
}) {
  return (
    <WhatsAppButton
      messageOptions={{
        messageType: 'product',
        product,
        category,
        price
      }}
      variant={variant}
      size={size}
      className={className}
    >
      Request Quote
    </WhatsAppButton>
  );
}
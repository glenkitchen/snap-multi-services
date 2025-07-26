export interface ContactInfo {
  name: string;
  phone: string;
  role: string;
}

export interface MessageOptions {
  service?: string;
  product?: string;
  category?: string;
  price?: string | number;
  messageType: 'service' | 'product' | 'quote' | 'emergency' | 'general';
  customMessage?: string;
}

// Contact information
export const CONTACTS: Record<string, ContactInfo> = {
  paul: {
    name: 'Paul van Rooyen',
    phone: '27843234595', // +27 84 323 4595
    role: 'Equipment Specialist'
  },
  jason: {
    name: 'Jason van Rooyen', 
    phone: '27828396910', // +27 82 839 6910
    role: 'Service Manager'
  }
};

/**
 * Format phone number for WhatsApp URL
 * Removes spaces, adds country code if needed
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Add country code if not present
  if (cleaned.startsWith('27')) {
    return cleaned;
  }
  
  // If starts with 0, replace with 27
  if (cleaned.startsWith('0')) {
    return '27' + cleaned.substring(1);
  }
  
  // Otherwise assume it needs +27
  return '27' + cleaned;
}

/**
 * Generate WhatsApp message based on context
 */
export function generateMessage(options: MessageOptions): string {
  const { messageType, service, product, category, price, customMessage } = options;
  
  if (customMessage) {
    return customMessage;
  }
  
  switch (messageType) {
    case 'service':
      return generateServiceMessage(service || 'General Service');
    
    case 'product':
      return generateProductMessage(product || 'Product', category, price);
    
    case 'quote':
      return generateQuoteMessage(service);
    
    case 'emergency':
      return generateEmergencyMessage();
    
    case 'general':
    default:
      return generateGeneralMessage();
  }
}

function generateServiceMessage(service: string): string {
  return `🔧 SERVICE REQUEST

Service: ${service}
Company: 
Location: 
Preferred Contact: WhatsApp

I'm interested in learning more about this service. Please provide a quote and availability.

Best regards`;
}

function generateProductMessage(product: string, category?: string, price?: string | number): string {
  const priceText = price ? `Price: R${price}` : 'Price: Please quote';
  const categoryText = category ? `Category: ${category}` : '';
  
  return `🛒 PRODUCT INQUIRY

Product: ${product}${categoryText ? '\n' + categoryText : ''}
${priceText}

I'm interested in this product. Please provide more information and confirm availability.

Best regards`;
}

function generateQuoteMessage(service?: string): string {
  return `💼 QUOTE REQUEST

Service Type: ${service || 'General Services'}
Company: 
Contact: 

I'd like to request a quote for your services. Please contact me to discuss my requirements.

Best regards`;
}

function generateEmergencyMessage(): string {
  return `🚨 EMERGENCY SERVICE REQUEST

URGENT: Equipment breakdown requiring immediate attention

Location: 
Equipment Type: 
Issue Description: 
Contact Number: 

Please respond as soon as possible for emergency repair service.

Best regards`;
}

function generateGeneralMessage(): string {
  return `👋 GENERAL INQUIRY

I'm interested in learning more about Snap-Multi-Services and would like to discuss my equipment needs.

Please contact me at your earliest convenience.

Best regards`;
}

/**
 * Determine which contact to route to based on message type and content
 */
export function getContactForMessage(options: MessageOptions): ContactInfo {
  const { messageType, service, product } = options;
  
  // Emergency goes to both, but we'll default to Jason (Service Manager)
  if (messageType === 'emergency') {
    return CONTACTS.jason;
  }
  
  // Product inquiries go to Paul (Equipment Specialist)
  if (messageType === 'product' || product) {
    return CONTACTS.paul;
  }
  
  // Service-specific routing
  if (messageType === 'service' && service) {
    const serviceLower = service.toLowerCase();
    
    // Equipment-related services go to Paul
    if (serviceLower.includes('equipment') || 
        serviceLower.includes('product') ||
        serviceLower.includes('air equipment') ||
        serviceLower.includes('parts')) {
      return CONTACTS.paul;
    }
    
    // Maintenance and repair services go to Jason
    if (serviceLower.includes('service') || 
        serviceLower.includes('maintenance') ||
        serviceLower.includes('repair') ||
        serviceLower.includes('compressor') ||
        serviceLower.includes('generator')) {
      return CONTACTS.jason;
    }
  }
  
  // Default to Jason for general inquiries and quotes
  return CONTACTS.jason;
}

/**
 * Create WhatsApp URL with formatted phone number and message
 */
export function createWhatsAppUrl(contact: ContactInfo, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contact.phone}?text=${encodedMessage}`;
}

/**
 * Main function to generate WhatsApp URL based on message options
 */
export function generateWhatsAppUrl(options: MessageOptions): string {
  const contact = getContactForMessage(options);
  const message = generateMessage(options);
  return createWhatsAppUrl(contact, message);
}

/**
 * Open WhatsApp with the generated URL
 */
export function openWhatsApp(options: MessageOptions): void {
  const url = generateWhatsAppUrl(options);
  window.open(url, '_blank');
}
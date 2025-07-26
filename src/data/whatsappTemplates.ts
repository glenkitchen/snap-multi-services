import { MessageOptions } from '@/utils/whatsapp';

export interface ServiceTemplate {
  id: string;
  name: string;
  description: string;
  contact: 'paul' | 'jason';
  messageOptions: MessageOptions;
}

export interface ProductTemplate {
  category: string;
  description: string;
  contact: 'paul' | 'jason';
  messageOptions: Omit<MessageOptions, 'product' | 'price'>;
}

// Pre-defined service templates
export const SERVICE_TEMPLATES: ServiceTemplate[] = [
  {
    id: 'air-compressor-service',
    name: 'Air Compressor Servicing',
    description: 'Yearly service & maintenance with certificates from R1,280',
    contact: 'jason',
    messageOptions: {
      messageType: 'service',
      service: 'Air Compressor Servicing'
    }
  },
  {
    id: 'generator-maintenance',
    name: 'Generator Maintenance',
    description: 'Professional services & maintenance with certificates (POA)',
    contact: 'jason',
    messageOptions: {
      messageType: 'service',
      service: 'Generator Maintenance'
    }
  },
  {
    id: 'equipment-repairs',
    name: 'Equipment Repairs',
    description: 'Fast repair service to minimize downtime',
    contact: 'jason',
    messageOptions: {
      messageType: 'service',
      service: 'Equipment Repairs'
    }
  },
  {
    id: 'emergency-service',
    name: 'Emergency Repairs',
    description: '24/7 emergency service for urgent equipment issues',
    contact: 'jason',
    messageOptions: {
      messageType: 'emergency'
    }
  },
  {
    id: 'air-equipment',
    name: 'Air Equipment',
    description: 'Tyre inflators, gauges, couplers, and hose reels',
    contact: 'paul',
    messageOptions: {
      messageType: 'service',
      service: 'Air Equipment Inquiry'
    }
  },
  {
    id: 'compressor-sales',
    name: 'Air Compressor Sales',
    description: 'New and refurbished air compressor equipment',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Air Compressors'
    }
  },
  {
    id: 'generator-sales',
    name: 'Generator Sales',
    description: 'Reliable power generation equipment',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Generators'
    }
  }
];

// Product category templates
export const PRODUCT_TEMPLATES: ProductTemplate[] = [
  {
    category: 'Tyre Inflator',
    description: 'Professional tyre inflation equipment',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Tyre Inflator'
    }
  },
  {
    category: 'Electronic Air Gauges',
    description: 'Precision air pressure measurement tools',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Electronic Air Gauges'
    }
  },
  {
    category: 'Hose Couplers & Connectors',
    description: 'Quality connections for air systems',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Hose Couplers & Connectors'
    }
  },
  {
    category: 'Hose Reels',
    description: 'Durable hose management solutions',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Hose Reels'
    }
  },
  {
    category: 'Tools',
    description: 'Professional air system tools',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Tools'
    }
  },
  {
    category: 'Rubber Hose',
    description: 'Quality rubber hoses for air systems',
    contact: 'paul',
    messageOptions: {
      messageType: 'product',
      category: 'Rubber Hose'
    }
  },
  {
    category: 'Service',
    description: 'Professional maintenance and repair services',
    contact: 'jason',
    messageOptions: {
      messageType: 'service',
      category: 'Service'
    }
  },
  {
    category: 'Reel Repairs',
    description: 'Repair services for hose reels and components',
    contact: 'jason',
    messageOptions: {
      messageType: 'service',
      category: 'Reel Repairs'
    }
  }
];

// Common message templates for quick access
export const QUICK_TEMPLATES = {
  GENERAL_QUOTE: {
    messageType: 'quote' as const,
    service: 'General Services'
  },
  
  EQUIPMENT_INQUIRY: {
    messageType: 'product' as const,
    category: 'Equipment'
  },
  
  SERVICE_BOOKING: {
    messageType: 'service' as const,
    service: 'Service Booking'
  },
  
  EMERGENCY_REQUEST: {
    messageType: 'emergency' as const
  },
  
  PRODUCT_CATALOG: {
    messageType: 'general' as const,
    customMessage: `📋 PRODUCT CATALOG REQUEST

I would like to receive your complete product catalog and pricing information.

Please send me details about:
- Air compressor equipment
- Generator equipment  
- Air-related tools and accessories
- Service pricing

Contact me at your convenience.

Best regards`
  }
} as const;

// Helper function to get template by service ID
export function getServiceTemplate(serviceId: string): ServiceTemplate | undefined {
  return SERVICE_TEMPLATES.find(template => template.id === serviceId);
}

// Helper function to get template by product category
export function getProductTemplate(category: string): ProductTemplate | undefined {
  return PRODUCT_TEMPLATES.find(template => template.category === category);
}

// Function to create equipment-specific messages
export function createEquipmentMessage(equipmentType: 'air' | 'compressor' | 'generator'): MessageOptions {
  switch (equipmentType) {
    case 'air':
      return {
        messageType: 'product',
        service: 'Air Equipment Inquiry',
        customMessage: `🔧 AIR EQUIPMENT INQUIRY

I'm interested in your air-related equipment including:
- Tyre inflators
- Electronic air gauges  
- Hose couplers & connectors
- Hose reels
- Air system tools

Please provide pricing and availability information.

Best regards`
      };
      
    case 'compressor':
      return {
        messageType: 'service',
        service: 'Air Compressor Services',
        customMessage: `🔧 AIR COMPRESSOR INQUIRY

I'm interested in:
- Air compressor servicing & maintenance
- Yearly service packages
- 3-yearly vessel testing
- Repair services

Please provide quote and scheduling information.

Best regards`
      };
      
    case 'generator':
      return {
        messageType: 'service', 
        service: 'Generator Services',
        customMessage: `⚡ GENERATOR INQUIRY

I'm interested in:
- Generator maintenance services
- Repair services
- Professional servicing with certificates

Please provide pricing and availability.

Best regards`
      };
      
    default:
      return QUICK_TEMPLATES.GENERAL_QUOTE;
  }
}
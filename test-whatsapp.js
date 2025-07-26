// Simple test to verify WhatsApp URL generation
const { generateWhatsAppUrl, CONTACTS } = require('./src/utils/whatsapp.ts');

// Test service request
console.log('=== Testing Service Request ===');
const serviceUrl = generateWhatsAppUrl({
  messageType: 'service',
  service: 'Air Compressor Servicing'
});
console.log('Service URL:', serviceUrl);

// Test product inquiry
console.log('\n=== Testing Product Inquiry ===');
const productUrl = generateWhatsAppUrl({
  messageType: 'product',
  product: 'PCL MK4 Tyre Inflator',
  category: 'Tyre Inflator',
  price: 1680
});
console.log('Product URL:', productUrl);

// Test general quote
console.log('\n=== Testing General Quote ===');
const quoteUrl = generateWhatsAppUrl({
  messageType: 'quote',
  service: 'General Services'
});
console.log('Quote URL:', quoteUrl);

// Test emergency
console.log('\n=== Testing Emergency Request ===');
const emergencyUrl = generateWhatsAppUrl({
  messageType: 'emergency'
});
console.log('Emergency URL:', emergencyUrl);

console.log('\n=== Contact Information ===');
console.log('Paul:', CONTACTS.paul);
console.log('Jason:', CONTACTS.jason);
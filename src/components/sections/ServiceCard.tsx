import { ServiceButton } from "@/components/ui/WhatsAppButton";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  color: 'primary' | 'secondary' | 'accent' | 'red';
}

const colorClasses = {
  primary: 'bg-primary',
  secondary: 'bg-secondary', 
  accent: 'bg-accent',
  red: 'bg-red-500'
};

const textColorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent', 
  red: 'text-red-500'
};

export default function ServiceCard({ icon, title, description, price, color }: ServiceCardProps) {
  // Map color to valid WhatsApp button variants
  const getButtonVariant = (color: ServiceCardProps['color']) => {
    switch (color) {
      case 'accent':
        return 'whatsapp';
      case 'red':
      case 'secondary':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className={`${textColorClasses[color]} font-bold text-lg mb-4`}>{price}</div>
      <ServiceButton 
        service={title}
        variant={getButtonVariant(color)}
        size="sm"
        className="w-full"
      />
    </div>
  );
}
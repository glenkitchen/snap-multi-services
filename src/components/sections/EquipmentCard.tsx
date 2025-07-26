import Image from 'next/image';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { createEquipmentMessage } from '@/data/whatsappTemplates';

interface EquipmentCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  items: string[];
  buttonText: string;
  gradient: 'blue' | 'green' | 'yellow';
  equipmentType: 'air' | 'compressor' | 'generator';
}

const gradientClasses = {
  blue: 'bg-gradient-to-br from-blue-50 to-blue-100',
  green: 'bg-gradient-to-br from-green-50 to-green-100',
  yellow: 'bg-gradient-to-br from-yellow-50 to-yellow-100'
};

export default function EquipmentCard({ 
  title, 
  imageSrc, 
  imageAlt, 
  items, 
  buttonText, 
  gradient,
  equipmentType
}: EquipmentCardProps) {
  return (
    <div className={`${gradientClasses[gradient]} rounded-2xl p-8 hover:shadow-xl transition-all`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-xl mb-6"
      />
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
      <WhatsAppButton
        messageOptions={createEquipmentMessage(equipmentType)}
        variant="primary"
        size="md"
        className="w-full py-3"
      >
        {buttonText}
      </WhatsAppButton>
    </div>
  );
}
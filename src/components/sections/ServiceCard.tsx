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
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className={`${textColorClasses[color]} font-bold text-lg`}>{price}</div>
    </div>
  );
}
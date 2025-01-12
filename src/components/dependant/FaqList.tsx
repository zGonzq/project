import { useState } from 'react';
import { FaqItem } from '../ui/FaqItem';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqListProps {
  faqs: Faq[];
}

export function FaqList({ faqs }: FaqListProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {faqs.map((faq) => (
        <FaqItem 
          key={faq.id}
          id={faq.id}
          question={faq.question} 
          answer={faq.answer}
          isOpen={openId === faq.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
import { IFormData } from '@/models';
import { toast } from 'react-toastify';

export const sendContactForm = async (data: IFormData) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASEURL + '/api/send', { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) 
  });

  if (!res.ok) {
    toast.error('Meddelandet kunde inte skickas!');
    return;
  }

  const json = await res.json();
  return json;
};

export default sendContactForm;
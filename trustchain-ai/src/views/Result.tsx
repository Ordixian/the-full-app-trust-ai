import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CreditCard } from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const report = location.state?.data; // This is the JSON from verify.py

  const handlePayment = async () => {
    try {
      const formData = new FormData();
      formData.append('email', 'customer@example.com'); // In production, get this from a form
      formData.append('amount', '12500'); // Example amount
      formData.append('verification_id', report.id);

      const response = await axios.post('http://localhost:8000/api/v1/payments/initiate', formData);
      
      // If Squad returns a 200, redirect the user to their checkout page
      if (response.data.status === 200) {
        window.location.href = response.data.data.checkout_url;
      }
    } catch (error) {
      alert("Payment initialization failed. Check your Backend & Squad Keys.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* ... your existing result UI ... */}
      
      {report?.analysis.score > 70 && (
        <button 
          onClick={handlePayment}
          className="mt-8 w-full bg-[#F5A623] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all"
        >
          <CreditCard size={20} />
          Execute Secure Payment via Squad
        </button>
      )}
    </div>
  );
}

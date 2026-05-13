import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CreditCard, Sparkles } from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const report = location.state?.data; // The JSON returned by verify.py

  const handlePayment = async () => {
    try {
      // Use FormData to match the backend's expected @Form parameters
      const paymentData = new FormData();
      paymentData.append('email', 'buyer@example.com'); // Capture from user in a real scenario
      paymentData.append('amount', '12500'); // Example product price
      paymentData.append('verification_id', report.id);

      const response = await axios.post('http://localhost:8000/api/v1/payments/initiate', paymentData);
      
      // Squad API returns status 200 upon successful initialization
      if (response.data.status === 200) {
        // Redirect to the Squad hosted checkout page
        window.location.href = response.data.data.checkout_url;
      }
    } catch (error) {
      console.error("Payment initialization failed:", error);
      alert("Payment Error: Verify your Squad keys and backend connection.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Existing Forensic Report UI */}
      
      {/* Only show payment button if the Trust Score is high */}
      {report?.analysis.score > 70 && (
        <button 
          onClick={handlePayment}
          className="w-full mt-10 bg-[#F5A623] text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-amber/20"
        >
          <CreditCard size={22} />
          Execute Secure Payment via Squad
        </button>
      )}
    </div>
  );
}

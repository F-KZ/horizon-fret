import { useState } from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      alert('All fields are required!');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    setLoading(true);
    emailjs
      .send(
       'service_xs4nptt', 
       'template_c91lioj', 
       formData,
         "HEH_5GqifCb6Bv51U",
      
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ email: '', message: '' });
          setLoading(false);
        },
        () => {
          alert('Failed to send message, please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full border rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'en cours...' : 'Envoyer'}
      </button>
    </form>
  );
};

export default ContactForm;

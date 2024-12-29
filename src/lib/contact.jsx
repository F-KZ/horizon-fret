import { SiMaildotru } from 'react-icons/si';
import { FaPhoneAlt } from "react-icons/fa";

const EMAIL = "contact@horizontransports.fr"; // Remplacez par votre email

export const SOCIAL_NETWORKS = [
  {
    url: '+33 7 69 98 98 85', // Remplacez par votre numéro de téléphone
    name: 'Telephone',
    icon: <FaPhoneAlt/>
  },
  {
    url: `${EMAIL}`,
    name: 'Mail',
    icon: <SiMaildotru/>

  },
];

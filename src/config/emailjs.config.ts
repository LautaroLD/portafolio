// EmailJS Configuration
// Obtén estas credenciales de https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Tu Public Key de EmailJS (Dashboard → Account → General)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Tu Service ID (Dashboard → Email Services)
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Tu Template ID (Dashboard → Email Templates)
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
}

// Para mayor seguridad, usa variables de entorno
// Crea un archivo .env en la raíz del proyecto:
/*
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
*/

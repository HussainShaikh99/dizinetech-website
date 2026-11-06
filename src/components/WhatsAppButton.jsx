export default function WhatsAppButton() {
  const phoneNumber = "918591754209";

  const message = encodeURIComponent(
    "Hi DizineTech! I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DizineTech on WhatsApp"
      className="whatsapp-float"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
        <path d="M16 .5A15.5 15.5 0 0 0 2.7 24L.5 31.5l7.7-2A15.5 15.5 0 1 0 16 .5zm0 28.3c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.8 12.8 0 1 1 16 28.8zm7-9.6c-.4-.2-2.2-1.1-2.6-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.5 3.7 1.7 4c.2.3 2.9 4.4 7 6.2 1 .4 1.8.7 2.4.8 1 .3 1.9.2 2.6.1.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.2-.2-.4-.3-.8-.5z"/>
      </svg>
    </a>
  );
}
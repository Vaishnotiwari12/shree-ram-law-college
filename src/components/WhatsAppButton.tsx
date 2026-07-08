import { SITE } from "./../lib/site";

export function WhatsAppButton() {
  const msg = encodeURIComponent(
    "Hello Shree Ram Law College, I would like to know more about admissions.",
  );
  const href = `https://wa.me/${SITE.whatsapp}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.28c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.23 1.35.19 1.86.12.57-.09 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.87 0-10.65 4.78-10.66 10.66 0 1.88.5 3.72 1.44 5.34l-1.52 5.54 5.68-1.49c1.56.85 3.32 1.3 5.06 1.3h.01c5.87 0 10.65-4.78 10.66-10.66 0-2.85-1.11-5.53-3.12-7.54a10.6 10.6 0 0 0-7.55-3.15zm0 19.5h-.01a8.83 8.83 0 0 1-4.5-1.24l-.32-.19-3.36.88.9-3.28-.21-.34a8.85 8.85 0 0 1-1.36-4.71c0-4.89 3.98-8.86 8.87-8.86 2.37 0 4.6.92 6.27 2.6a8.8 8.8 0 0 1 2.6 6.27c0 4.89-3.98 8.86-8.88 8.86z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

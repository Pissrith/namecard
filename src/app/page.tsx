// app/page.tsx
import Image from "next/image";
import {
  Facebook,
  Phone,
  MessageCircle,
  Instagram,
  Youtube,
  Music2,
  Twitter,
  MoreVertical,
  MapPin,
} from "lucide-react";

const LineIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 320 320"
  >
    <g>
      <rect fill="#06c755" width="320" height="320" rx="72.14" />
      <path
        fill="white"
        d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z"
      />
      <path
        fill="#06c755"
        d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z"
      />
      <path
        fill="#06c755"
        d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z"
      />
      <rect
        fill="#06c755"
        x="128.73"
        y="121.85"
        width="11.64"
        height="50.64"
        rx="2.04"
      />
      <path
        fill="#06c755"
        d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z"
      />
    </g>
  </svg>
);
export default function Home() {
  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      href: "https://www.facebook.com/NardCommanShop",
    },

    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone : 080-561-9294",
      href: "tel:+6680-561-9294",
    },
    {
      icon: <LineIcon className="w-6 h-6" />,
      label: "Line id: ple1356",
      href: "https://line.me/ti/p/ple1356ห",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Line Open Chat",
      href: "https://line.me/ti/g2/poE0OPpVc0U8FBwKssvmSPsUOXcBLAXEntmfkA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Google Map",
      href: "https://maps.app.goo.gl/8zpTF3TGzZHGezZx5",
    },
  ];

  return (
    <main className="min-h-screen bg-black p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl p-8 shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Image */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/301222529_458658376276418_1938259836538163739_n.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and Title */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Nana Tactical</h1>
            <p className="text-zinc-400">ร้านขายอุปกรณ์ยุทธวิธีราคาถูก</p>
          </div>

          {/* Social Links */}
          <div className="w-full space-y-3 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  {link.icon}
                  {link.label}
                </span>
                <MoreVertical className="w-5 h-5 text-zinc-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

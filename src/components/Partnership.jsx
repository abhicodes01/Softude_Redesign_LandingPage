import React from "react";
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.png";

const clientLogos = [
  client1, client2, client3, client4,
  client5, client6
];

export default function Partnership() {

  return (
    <section className="w-full bg-white text-black py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12">
          Partnership <span className="text-red-600">& Certification</span>
        </h2>

    
          <div className="mt-12 overflow-hidden">
            <div className="relative">
              <div
                className="flex items-center gap-8 whitespace-nowrap marquee-left"
                aria-hidden="true"
              >
                {clientLogos.concat(clientLogos).map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="shrink-0 w-40 h-20 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`client-${i}`}
                      className="max-h-60 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden">
            <div className="relative">
              <div
                className="flex items-center gap-8 whitespace-nowrap marquee-right"
                aria-hidden="true"
              >
                {clientLogos.concat(clientLogos).map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="shrink-0 w-40 h-20 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`client-${i}`}
                      className="max-h-60 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-left {
          animation: marquee-left 18s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 18s linear infinite reverse;
        }
      `}</style>
    </section>
    
  );
}

"use client";

import { useRef,useState } from "react";
import { concert } from "@/lib/data";
//import Image from "next/image";
import { Variants, motion, useScroll, useTransform } from "framer-motion";

type ConcertProps = (typeof concert)[number];





const cardVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    }},
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration:.5
      },
    }
  };







export default function Cards({
    title,
    venue,
    artist,
    ticket_price,
    seat_capacity,
    seat_available,
    schedule,
  }: ConcertProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const xProgress = useTransform(scrollYProgress, [0, 1], [100, 0]); // Slide in from the right
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
    return (
      <motion.div
        ref={ref}
        style={{
          x: xProgress,
          opacity: opacityProgess,
        }}
        className="group relative w-full h-full"
      >
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          exit="closed" // Add exit animation for smoother transitions
          variants={{
            open: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            },
            closed: {
              x: 100, // Slide out to the right
              opacity: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            },
          }}
          className=""
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <section className={`bg-penta text-left text-Sregular border border-black/5 rounded-lg p-4`}>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed">
                  Venue: {venue} <br />
                  Artist: {artist}
                </p>
                <div className="flex text-lg mt-4">
                  Schedule: {schedule} <br />
                  Ticket Price: {ticket_price}
                </div>
              </div>
            </section>
          </motion.button>
  
          <motion.ul
            variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05
                    }
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3
                    }
                  }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={cardVariants} className={`relative bg-primary} font-Sregular text-bold overflow-hidden rounded-md shadow-lg p-6 mb-4`}>
              <div className="flex flex-col">
                <span className={`text-penta`}>
                  Seat Capacity: {seat_capacity} <br />
                  Seat Available: {seat_available}
                </span>
                <motion.button
                  className={`mt-4 bg-penta text-primary font-Sregular text-bold p-3 rounded-md hover:bg-Dark transition duration-300`}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    );
  }
  
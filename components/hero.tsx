"use client";
import React, { useRef, useEffect, useState, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

// Memoize static components to prevent unnecessary re-renders
const MemoizedBackgroundGrids = memo(BackgroundGrids);
const MemoizedExplosion = memo(Explosion);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });
  
  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50 dark:bg-neutral-900"
    >
      <MemoizedBackgroundGrids />
      
      {/* Reduce number of collision mechanisms for mobile */}
      <CollisionMechanism
        beamOptions={{
          initialX: -400,
          translateX: 600,
          duration: 7,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      
      {/* Only show additional animations on desktop */}
      <div className="hidden md:block">
        <CollisionMechanism
          beamOptions={{
            initialX: -200,
            translateX: 800,
            duration: 4,
            repeatDelay: 3,
          }}
          containerRef={containerRef}
          parentRef={parentRef}
        />
        <CollisionMechanism
          beamOptions={{
            initialX: 200,
            translateX: 1200,
            duration: 5,
            repeatDelay: 3,
          }}
          containerRef={containerRef}
          parentRef={parentRef}
        />
        <CollisionMechanism
          containerRef={containerRef}
          parentRef={parentRef}
          beamOptions={{
            initialX: 400,
            translateX: 1400,
            duration: 6,
            repeatDelay: 3,
          }}
        />
      </div>

      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl">
        <Balancer>
          <h2 className="animate-fade-in">
            Automate your business in seconds, not hours.
          </h2>
        </Balancer>
      </div>
      
      <p className="relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200 animate-fade-in-delayed">
        With ABRA AI&apos;s state-of-the-art, cutting-edge AI technology, 
        you can start your journey to autonomous operations in seconds.
      </p>
      
      <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20 animate-fade-in-delayed">
        <Button
          as={Link}
          href="/login"
          variant="dark"
          className="w-40 text-center"
        >
          Create account
        </Button>

        <Button
          data-cal-namespace={calOptions.namespace}
          data-cal-link={CONSTANTS.CALCOM_LINK}
          data-cal-config={`{"layout":"${calOptions.layout}"}`}
          as="button"
          variant="primary"
          className="w-40"
        >
          Book a call
        </Button>
      </div>
    </div>
  );
}

function BackgroundGrids() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
}

// Optimize collision mechanism with throttling and reduced calculations
const CollisionMechanism = memo(React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  
  // Use a ref to track collision state to avoid unnecessary re-renders
  const collisionDetectedRef = useRef(false);

  useEffect(() => {
    // Throttle collision detection to reduce CPU usage
    let lastCheck = 0;
    const THROTTLE_MS = 100; // Check only every 100ms instead of 50ms
    
    const checkCollision = () => {
      const now = Date.now();
      if (now - lastCheck < THROTTLE_MS) return;
      lastCheck = now;
      
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !collisionDetectedRef.current
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        // Simple bounding box check before detailed collision
        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          collisionDetectedRef.current = true;
          if (beamRef.current) {
            beamRef.current.style.opacity = "0";
          }
        }
      }
    };

    const animationInterval = setInterval(checkCollision, THROTTLE_MS);
    return () => clearInterval(animationInterval);
  }, [containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const resetTimer = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        collisionDetectedRef.current = false;
        // Set beam opacity to 0
        if (beamRef.current) {
          beamRef.current.style.opacity = "1";
        }
        
        // Reset the beam animation after a delay
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || -45,
        }}
        animate={{
          translateY: beamOptions.translateY || "800px",
          translateX: beamOptions.translateX || "700px",
          rotate: beamOptions.rotate || -45,
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <MemoizedExplosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x + 20}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}));

CollisionMechanism.displayName = "CollisionMechanism";

// Optimize explosion animation
function Explosion({ ...props }: React.HTMLProps<HTMLDivElement>) {
  // Reduce number of particles for better performance
  const spans = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-[4px] w-10 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-500"
        />
      ))}
    </div>
  );
}

const GridLineVertical = memo(({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.3)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
});

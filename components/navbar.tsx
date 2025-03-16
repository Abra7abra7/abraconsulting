"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

interface NavbarProps {
  navItems: {
    name: string;
    link: string;
    hasDropdown?: boolean;
    dropdownItems?: {
      name: string;
      link: string;
    }[];
  }[];
  visible: boolean;
}

export const Navbar = () => {
  // Feature items for dropdown
  const featureItems = [
    {
      name: "One-Click Automation",
      link: "/features/one-click-automation",
    },
    {
      name: "Intuitive Workflow",
      link: "/features/intuitive-workflow",
    },
    {
      name: "Edge Hosting",
      link: "/features/edge-hosting",
    },
    {
      name: "Business Insights",
      link: "/features/business-insights",
    },
  ];

  const navItems = [
    {
      name: "Features",
      link: "/features",
      hasDropdown: true,
      dropdownItems: featureItems,
    },
    {
      name: "Pricing",
      link: "/#pricing",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className="w-full fixed top-0 inset-x-0 z-50">
      <DesktopNav visible={visible} navItems={navItems} />
      <MobileNav visible={visible} navItems={navItems} />
    </motion.div>
  );
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

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
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "hidden lg:flex flex-row  self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
    >
      <Logo />
      <motion.div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: any, idx: number) => (
          <div 
            key={`link=${idx}`}
            className="relative"
            onMouseEnter={() => {
              setHovered(idx);
              if (navItem.hasDropdown) {
                setOpenDropdown(idx);
              }
            }}
            onMouseLeave={() => {
              if (navItem.hasDropdown) {
                setOpenDropdown(null);
              }
            }}
          >
            <Link
              className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2 flex items-center"
              href={navItem.link}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                />
              )}
              <span className="relative z-20">{navItem.name}</span>
              {navItem.hasDropdown && (
                <span className={`relative z-20 ml-1 text-xs transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : ''}`}>▼</span>
              )}
            </Link>
            
            {/* Dropdown Menu */}
            {navItem.hasDropdown && openDropdown === idx && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-1 bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden z-50 min-w-[200px]"
              >
                {navItem.dropdownItems?.map((item: { name: string; link: string }, itemIdx: number) => (
                  <Link
                    key={`dropdown-${idx}-${itemIdx}`}
                    href={item.link}
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
      <div className="flex items-center gap-4">
        <ModeToggle />

        <AnimatePresence mode="popLayout" initial={false}>
          {!visible && (
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: [0, 0, 1],
              }}
              exit={{
                x: 100,
                opacity: [0, 0, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Button
                as={Link}
                href={CONSTANTS.LOGIN_LINK}
                variant="secondary"
                className="hidden md:block "
              >
                Login
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          data-cal-namespace={calOptions.namespace}
          data-cal-link={CONSTANTS.CALCOM_LINK}
          data-cal-config={`{"layout":"${calOptions.layout}"}`}
          as="button"
          variant="primary"
          className="hidden md:block "
        >
          Book a call
        </Button>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const calOptions = useCalEmbed({
    namespace: "chat-with-manu-demo",
    styles: {
      branding: {
        brandColor: "#000000",
      },
    },
    hideEventTypeDetails: false,
    layout: "month_view",
  });

  return (
    <>
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          y: visible ? 20 : 0,
          borderRadius: open ? "4px" : "2rem",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent   max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50",
          visible && "bg-white/80 dark:bg-neutral-950/80"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              {navItems.map((navItem: any, idx: number) => (
                <div key={`link=${idx}`} className="w-full">
                  <Link
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <motion.span className="block">{navItem.name}</motion.span>
                  </Link>
                  
                  {/* Nested Feature Items */}
                  {navItem.hasDropdown && navItem.dropdownItems && (
                    <div className="pl-4 mt-2 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
                      {navItem.dropdownItems.map((item: { name: string; link: string }, itemIdx: number) => (
                        <Link
                          key={`mobile-dropdown-${idx}-${itemIdx}`}
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                as={Link}
                onClick={() => setOpen(false)}
                href={CONSTANTS.LOGIN_LINK}
                variant="primary"
                className="block md:hidden w-full"
              >
                Login
              </Button>
              <Button
                data-cal-namespace={calOptions.namespace}
                data-cal-link={`manu-arora-vesr9s/chat-with-manu-demo`}
                data-cal-config={`{"layout":"${calOptions.layout}"}`}
                as="button"
                onClick={() => setOpen(false)}
                variant="primary"
                className="block md:hidden w-full"
              >
                Book a call
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

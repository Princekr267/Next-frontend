"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const [textContainerHeight, setTextContainerHeight] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#0f172a", // slate-900
        "#000000", // black
        "#171717", // neutral-900
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
        "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
        "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    useEffect(() => {
        if (textContainerRef.current) {
            setTextContainerHeight(textContainerRef.current.scrollHeight);
        }
    }, [content]);

    // Translate progress (0 to 1) to translateY of the text list.
    // 320px leaves viewport space for text content blocks to slide nicely.
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -Math.max(0, textContainerHeight - 320)]
    );

    return (
        <div ref={ref} className="relative h-[250vh] w-full">
            <motion.div
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="sticky top-0 flex h-screen items-center justify-center space-x-10 overflow-hidden p-10 w-full"
            >
                <div className="relative h-[30rem] flex items-start px-4 overflow-hidden">
                    <motion.div
                        style={{ y: translateY }}
                        ref={textContainerRef}
                        className="max-w-2xl"
                    >
                        {content.map((item, index) => (
                            <div key={item.title + index} className="my-20">
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-2xl font-bold text-slate-100"
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-kg mt-10 max-w-sm text-slate-300"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        ))}
                        <div className="h-40" />
                    </motion.div>
                </div>
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
                        contentClassName,
                    )}
                >
                    {content[activeCard].content ?? null}
                </div>
            </motion.div>
        </div>
    );
};

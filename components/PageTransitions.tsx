import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { animated, useTransition } from "@react-spring/web";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransitions: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter();
  const [displayedPage, setDisplayedPage] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setDisplayedPage(url);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const transitions = useTransition(displayedPage, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    keys: displayedPage,
  });

  return transitions((style, item) => (
    <animated.div style={style}>{children}</animated.div>
  ));
};

export default PageTransitions;

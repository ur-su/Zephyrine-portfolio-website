import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

type useSectionViewProps = {
  sectionName: SectionName;
  threshold?: number;
};

export function useSectionInView({
  sectionName,
  threshold = 0.75,
}: useSectionViewProps) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);
  return { ref, inView };
}

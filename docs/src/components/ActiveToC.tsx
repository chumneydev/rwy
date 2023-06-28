import type { h, RefObject } from "preact";
import { useState, useEffect } from "preact/hooks";
import type { MarkdownHeading } from "astro";

interface Props {
  headings: MarkdownHeading[];
}

const useActiveHeading = () => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.getAttribute("id"));
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px",
      }
    );

    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeHeading;
};

const handleInitialHash = (setActiveHeadingCallback: (newActiveHeading: string | null) => void) => {
  const initialHash = window.location.hash;
  if (initialHash) {
    const targetElement = document.querySelector(initialHash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      // setActiveHeading is undefined

      setActiveHeadingCallback(initialHash.slice(1));
    }, 100);
  }
};

const ActiveToC = (props: Props) => {
  const activeHeading = useActiveHeading();

  useEffect(() => {
    // @ts-ignore
    handleInitialHash((newActiveHeading) => setActiveHeading(newActiveHeading));
  }, []);

  return (
    <nav id="test" class="sticky top-24 flex flex-col items-center px-4">
      <h5 class="pb-2 font-bold tracking-wide">On This Page</h5>
      <ul class="">
        {props.headings.map((heading) => {
          const isActive = activeHeading === heading.slug;
          return (
            // If the heading.depth is 3, then the heading is an h3 and add 4px of left padding.
            // If the heading.depth is 4, then the heading is an h4 and add 8px of left padding.

            <li class={` ${isActive ? "text-sky-500" : ""}`}>
              <a href={`#${heading.slug}`} class={`${heading.depth > 2 ? "block pl-2" : ""}`}>
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ActiveToC;

"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { id } from "@its-satyajit/id-generator";

function createWrapperAndAppendToBody(wrapperId: string): HTMLElement {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId?: string;
}

const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  wrapperId = id.shortUuidV7(),
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;
    let element = document.getElementById(wrapperId);
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    if (isMounted) {
      setWrapperElement(element);
    }
    return () => {
      isMounted = false;
      if (element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};

export default ReactPortal;

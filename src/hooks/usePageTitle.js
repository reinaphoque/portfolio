import { useEffect } from "react";
import { NAME } from "../data/content";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${NAME}` : `${NAME} — Game & UX/UI Designer, Illustrator`;
  }, [title]);
}

import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import Case from "../case";

export const data = [
  {
    title: "Home",
    id: "home",
    url: "/cloneCoding",
  },
  {
    title: "case1",
    id: "case1",
    url: "/cloneCoding/case1",
  },
  {
    title: "case2",
    id: "case2",
    url: "/cloneCoding/case2",
  },
  {
    title: "case3",
    id: "case3",
    url: "/cloneCoding/case3",
  },
];

export default function Animation7() {
  return (
    <Router>
      <AnimateSharedLayout>
        <nav
          style={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#ffff00",
          }}
          className="rounded-xl"
        >
          <Case />
        </nav>
      </AnimateSharedLayout>
    </Router>
  );
}

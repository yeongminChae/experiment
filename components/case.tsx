import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "./animation/animation7";

const Case = () => {
  let location = useLocation();
  return (
    <>
      {" "}
      {data.map((item, i) => {
        const components: any = {
          home: Home,
          case1: Case1,
          case2: Case2,
          case3: Case3,
        };
        const DefaultError = () => {
          return <div>Error, no page found</div>;
        };
        const Tag = components[item.id] || DefaultError;
        const isActive = location.pathname === item.url;
        return (
          <motion.div
            layout
            variants={divVariants}
            animate={isActive ? "expanded" : "collapsed"}
            initial={false}
            data-section={item.id}
            key={item.id}
            style={{
              overflow: "hidden",
              zIndex: i,
              display: "block",
              position: "relative",
              backgroundColor: `hsl(${i * 20},100%,50%)`,
            }}
          >
            <NavLink
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: isActive ? "none" : "all",
                zIndex: 10,
              }}
              exact={true}
              activeClassName="active"
              to={item.url}
            />
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layout
                  variants={tagVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  style={{
                    padding: 20,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    height: "100%",
                    overflowY: "hidden",
                    overflowX: "hidden",
                  }}
                >
                  <Tag data={data} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </>
  );
};

const Home = () => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      className="text-white "
    >
      This is Red.
    </div>
  );
};
const Case1 = () => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      className="text-white"
    >
      This is Orange.
    </div>
  );
};
const Case2 = () => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      className="text-white"
    >
      This is Half Orange.
    </div>
  );
};
const Case3 = () => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      className="text-black"
    >
      This is Yellow.
    </div>
  );
};

const divVariants = {
  expanded: {
    width: "55%",
    transition: {
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  collapsed: {
    width: "15%",
    transition: {
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const tagVariants = {
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export default Case;
